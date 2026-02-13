import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HistoryDetailScreen({ route }) {
  const { scan } = route.params;

  function riskColor(risk) {
    if (risk === "HIGH") return "#ef4444";
    if (risk === "MEDIUM") return "#f59e0b";
    return "#22c55e";
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.risk, { color: riskColor(scan.risk) }]}>
        {scan.risk} RISK — {scan.score}/100
      </Text>

      <Text style={styles.label}>Input:</Text>
      <Text style={styles.text}>{scan.input}</Text>

      {scan.notes ? (
        <>
          <Text style={styles.label}>Notes:</Text>
          <Text style={styles.text}>{scan.notes}</Text>
        </>
      ) : null}

      <Text style={styles.label}>Reasons:</Text>
      {scan.reasons.map((r, i) => (
        <Text key={i} style={styles.reason}>
          • {r}
        </Text>
      ))}

      <Text style={styles.date}>
        {new Date(scan.timestamp).toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
  },
  risk: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    color: "#94a3b8",
    marginTop: 10,
    fontWeight: "bold",
  },
  text: {
    color: "#e2e8f0",
    marginTop: 4,
  },
  reason: {
    color: "#cbd5e1",
    marginTop: 4,
  },
  date: {
    marginTop: 20,
    color: "#64748b",
  },
});
