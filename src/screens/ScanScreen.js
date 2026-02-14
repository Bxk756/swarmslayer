import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { analyzeScan } from "../utils/scanLogic";
import { saveScan } from "../utils/historyStorage";

export default function ScanScreen() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!input.trim()) {
      Alert.alert("Enter something to scan");
      return;
    }

    setLoading(true);

    try {
      // Run weighted scoring engine
      const analysis = analyzeScan(input);

      // Save to history
      await saveScan({
        ...analysis,
        content: input,
        date: new Date().toISOString(),
      });

      setResult(analysis);

      // Navigate to History after slight delay
      setTimeout(() => {
        navigation.navigate("History");
      }, 800);
    } catch (error) {
      console.error(error);
      Alert.alert("Scan failed");
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scan Suspicious Message</Text>

      <TextInput
        style={styles.input}
        placeholder="Paste suspicious message or phone number..."
        placeholderTextColor="#888"
        multiline
        value={input}
        onChangeText={setInput}
      />

      <Pressable style={styles.button} onPress={handleScan}>
        <Text style={styles.buttonText}>
          {loading ? "Scanning..." : "Run Scan"}
        </Text>
      </Pressable>

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.score}>
            Threat Score: {result.score}/100
          </Text>

          <Text
            style={[
              styles.level,
              result.level === "High"
                ? styles.high
                : result.level === "Medium"
                ? styles.medium
                : styles.low,
            ]}
          >
            Risk Level: {result.level}
          </Text>

          <Text style={styles.detailsTitle}>Detected Signals:</Text>

          {result.flags.map((flag, index) => (
            <Text key={index} style={styles.flag}>
              • {flag}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    minHeight: 120,
    color: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#f97316",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultBox: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
  },
  score: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  level: {
    fontSize: 16,
    marginBottom: 10,
  },
  high: {
    color: "#ef4444",
  },
  medium: {
    color: "#facc15",
  },
  low: {
    color: "#22c55e",
  },
  detailsTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 6,
  },
  flag: {
    color: "#cbd5e1",
    marginBottom: 4,
  },
});
