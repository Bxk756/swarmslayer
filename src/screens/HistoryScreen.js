import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../ui/styles";
import { loadHistory, clearHistory } from "../services/history";

export default function HistoryScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadHistory().then(setItems);
  }, []);

  async function clearAll() {
    await clearHistory();
    setItems([]);
  }

  return (
    <ScrollView style={{ backgroundColor: "#020617" }}>
      <View style={styles.container}>
        <Text style={styles.title}>History</Text>
        <Text style={styles.subtitle}>Stored locally on this device</Text>

        {items.length === 0 && (
          <Text style={styles.small}>No scans yet.</Text>
        )}

        {items.map((h) => (
          <View key={h.ts} style={styles.card}>
            <Text style={{ color: "white", fontWeight: "800" }}>
              {h.number} • {h.level} • {h.score}
            </Text>
            {h.notes ? <Text style={styles.small}>{h.notes}</Text> : null}
            <Text style={styles.small}>
              {new Date(h.ts).toLocaleString()}
            </Text>
          </View>
        ))}

        <TouchableOpacity style={styles.btnAlt} onPress={clearAll}>
          <Text style={styles.btnText}>CLEAR HISTORY</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
