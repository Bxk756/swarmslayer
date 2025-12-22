import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SwarmSlayer Scan</Text>

      <Text style={styles.text}>
        Trigger recon tools and normalize results into the A2A policy schema.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Run Scan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#cbd5f5",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  buttonText: {
    color: "#020617",
    fontSize: 16,
    fontWeight: "bold",
  },
});
