import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SwarmSlayer</Text>
      <Text style={styles.text}>
        Policy-driven AI security interface built on Swarm Shield.
      </Text>
      <Text style={styles.subtext}>
        Tools generate signals. Policy decides behavior.
      </Text>
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
    color: "#22c55e",
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#cbd5f5",
    textAlign: "center",
    marginBottom: 12,
  },
  subtext: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
  },
});
