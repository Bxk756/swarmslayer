import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "SWARMSLAYER_SCAN_HISTORY";

export default function HistoryScreen() {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    loadScans();
  }, []);

  const loadScans = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setScans(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error loading scans:", error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "No Date";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Scan History</Text>

      {scans.length === 0 ? (
        <Text style={styles.empty}>No scans yet.</Text>
      ) : (
        scans.map((scan) => (
          <View key={scan.id} style={styles.card}>
            <Text style={styles.risk}>
              RISK — {scan.score}/100
            </Text>
            <Text style={styles.inputText}>
              {scan.input}
            </Text>
            <Text style={styles.date}>
              {formatDate(scan.timestamp)}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 20,
  },
  empty: {
    color: "#94a3b8",
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  risk: {
    color: "#22c55e",
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputText: {
    color: "#fff",
  },
  date: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 5,
  },
});
