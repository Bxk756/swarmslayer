import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function DeterrentScreen() {
  const copyScript = (text) => {
    Alert.alert("Response Script", text);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.header}>Scam Deterrent</Text>
      <Text style={styles.subheader}>
        Use these scripts to safely disengage from scam calls or messages.
      </Text>

      {/* HIGH RISK RESPONSE */}
      <View style={[styles.card, styles.highRisk]}>
        <Text style={styles.cardTitle}>High Risk Response</Text>
        <Text style={styles.cardText}>
          “I do not conduct financial or personal matters over phone or text. 
          Remove my number from your system.”
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            copyScript(
              "I do not conduct financial or personal matters over phone or text. Remove my number from your system."
            )
          }
        >
          <Text style={styles.buttonText}>Use This Script</Text>
        </TouchableOpacity>
      </View>

      {/* MEDIUM RISK RESPONSE */}
      <View style={[styles.card, styles.mediumRisk]}>
        <Text style={styles.cardTitle}>Medium Risk Response</Text>
        <Text style={styles.cardText}>
          “I will verify this independently using official contact information.”
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            copyScript(
              "I will verify this independently using official contact information."
            )
          }
        >
          <Text style={styles.buttonText}>Use This Script</Text>
        </TouchableOpacity>
      </View>

      {/* LOW RISK RESPONSE */}
      <View style={[styles.card, styles.lowRisk]}>
        <Text style={styles.cardTitle}>Low Risk</Text>
        <Text style={styles.cardText}>
          No response needed. Stay cautious and avoid sharing sensitive data.
        </Text>
      </View>

      {/* SAFETY REMINDER */}
      <View style={styles.reminderCard}>
        <Text style={styles.reminderTitle}>Golden Rule</Text>
        <Text style={styles.reminderText}>
          Never share passwords, codes, SSNs, banking info, or gift card numbers.
          Legitimate organizations do not demand urgent payment.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: "#94a3b8",
    marginBottom: 24,
  },
  card: {
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
  },
  highRisk: {
    borderColor: "#ef4444",
    backgroundColor: "#111827",
  },
  mediumRisk: {
    borderColor: "#f59e0b",
    backgroundColor: "#111827",
  },
  lowRisk: {
    borderColor: "#22c55e",
    backgroundColor: "#111827",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
  },
  cardText: {
    fontSize: 15,
    color: "#cbd5e1",
    marginBottom: 14,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#22c55e",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#020617",
    fontWeight: "bold",
  },
  reminderCard: {
    marginTop: 10,
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#0f172a",
    borderColor: "#22c55e",
    borderWidth: 1,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 8,
  },
  reminderText: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 20,
  },
});
