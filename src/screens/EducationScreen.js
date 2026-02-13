import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Scam Education</Text>
      <Text style={styles.subtitle}>
        Learn how SwarmSlayer evaluates threats and protects you.
      </Text>

      {/* LOW RISK */}
      <View style={styles.cardLow}>
        <Text style={styles.cardTitle}>LOW RISK</Text>
        <Text style={styles.cardText}>
          Messages marked LOW RISK show no known scam indicators.
        </Text>
        <Text style={styles.bullet}>• No urgency or threats</Text>
        <Text style={styles.bullet}>• No payment requests</Text>
        <Text style={styles.bullet}>• Often seen before on this device</Text>
      </View>

      {/* MEDIUM RISK */}
      <View style={styles.cardMedium}>
        <Text style={styles.cardTitle}>MEDIUM RISK</Text>
        <Text style={styles.cardText}>
          These messages contain suspicious patterns that deserve caution.
        </Text>
        <Text style={styles.bullet}>• Urgent language</Text>
        <Text style={styles.bullet}>• Requests to verify accounts</Text>
        <Text style={styles.bullet}>• Unknown senders</Text>
      </View>

      {/* HIGH RISK */}
      <View style={styles.cardHigh}>
        <Text style={styles.cardTitle}>HIGH RISK</Text>
        <Text style={styles.cardText}>
          High-risk scans show strong scam indicators and should NOT be engaged.
        </Text>
        <Text style={styles.bullet}>• Threats (arrest, account lock)</Text>
        <Text style={styles.bullet}>• Requests for money or gift cards</Text>
        <Text style={styles.bullet}>• Impersonation (IRS, banks, carriers)</Text>
      </View>

      {/* HOW SCAMS WORK */}
      <View style={styles.cardNeutral}>
        <Text style={styles.cardTitle}>How Scams Work</Text>
        <Text style={styles.cardText}>
          Scammers rely on fear, urgency, and authority to bypass rational
          thinking.
        </Text>
        <Text style={styles.bullet}>• Pressure you to act fast</Text>
        <Text style={styles.bullet}>• Prevent verification</Text>
        <Text style={styles.bullet}>• Isolate you from help</Text>
      </View>

      {/* SAFETY TIP */}
      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>Safety Tip</Text>
        <Text style={styles.tipText}>
          Legitimate organizations will NEVER demand immediate payment or
          threaten arrest via text or call.
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
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#22c55e",
    marginBottom: 8,
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: 20,
  },

  cardLow: {
    borderColor: "#22c55e",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  cardMedium: {
    borderColor: "#f59e0b",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  cardHigh: {
    borderColor: "#ef4444",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  cardNeutral: {
    borderColor: "#38bdf8",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 6,
  },
  cardText: {
    color: "#cbd5f5",
    marginBottom: 8,
  },
  bullet: {
    color: "#94a3b8",
    marginLeft: 8,
  },

  tipBox: {
    backgroundColor: "#020617",
    borderColor: "#22c55e",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 40,
  },
  tipTitle: {
    color: "#22c55e",
    fontWeight: "700",
    marginBottom: 6,
  },
  tipText: {
    color: "#cbd5f5",
  },
});

