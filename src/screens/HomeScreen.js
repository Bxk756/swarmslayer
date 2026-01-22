import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../ui/styles";
import { getDefenseMode, setDefenseMode } from "../services/defenseMode";

export default function HomeScreen({ navigation }) {
  const [mode, setMode] = useState("WARN");

  useEffect(() => {
    getDefenseMode().then(setMode);
  }, []);

  async function toggleMode() {
    const next = mode === "WARN" ? "AUTO_DENY" : "WARN";
    await setDefenseMode(next);
    setMode(next);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SwarmSlayer</Text>
      <Text style={styles.subtitle}>
        Defensive state: {mode === "WARN" ? "Warn Only" : "Auto-Deny Guidance"}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={toggleMode}>
        <Text style={styles.btnText}>
          SWITCH TO {mode === "WARN" ? "AUTO-DENY" : "WARN"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnAlt}
        onPress={() => navigation.navigate("Scan")}
      >
        <Text style={styles.btnText}>Run Defense Scan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnGhost}
        onPress={() => navigation.navigate("History")}
      >
        <Text style={styles.btnText}>Defense History</Text>
      </TouchableOpacity>
    </View>
  );
}
