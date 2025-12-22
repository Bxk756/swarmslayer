import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DecisionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A2A Policy Decision</Text>
      <Text style={styles.decision}>ACTION : ESCALATE</Text>
      <Text style={styles.text}>
        Output from the policy engine after evaluation.
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
    fontSize: 24,
    color: "#38bdf8",
    marginBottom: 20,
    fontWeight: "bold",
  },
  decision: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f97316",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#cbd5f5",
    textAlign: "center",
  },
});
