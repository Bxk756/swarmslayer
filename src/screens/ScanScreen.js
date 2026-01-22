import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";
import * as Haptics from "expo-haptics";

import { getDefenseMode } from "../services/defenseMode";
import { addHistory } from "../services/history";

/**
 * Defensive intent classifier
 * Local-only, deterministic, non-exploitable
 */
function scoreIntent({ notes }) {
  let score = 0;

  const indicators = [
    /refund/i,
    /gift.?card/i,
    /crypto|bitcoin/i,
    /urgent|immediately/i,
    /verify|confirm/i,
    /account|login/i,
    /bank|wire/i,
    /password|code/i,
    /microsoft|apple|amazon/i,
    /suspended|locked/i
  ];

  indicators.forEach((rx) => {
    if (rx.test(notes)) score += 2;
  });

  let level = "LOW";
  if (score >= 6) level = "HIGH";
  else if (score >= 3) level = "MEDIUM";

  return { score, level };
}

export default function ScanScreen() {
  const [notes, setNotes] = useState("");

  const result = useMemo(
    () => scoreIntent({ notes }),
    [notes]
  );

  async function runScan() {
    if (!notes.trim()) {
      Alert.alert("Nothing to scan", "Enter a message or behavior to analyze.");
      return;
    }

    const mode = await getDefenseMode();

    // Haptic feedback (defensive signaling)
    if (result.level === "HIGH") {
      await Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Error
      );
    } else if (result.level === "MEDIUM") {
      await Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Warning
      );
    }

    // Persist locally (swarm memory)
    await addHistory({
      ts: Date.now(),
      notes,
      score: result.score,
      level: result.level
    });

    // Auto-deny guidance (not OS blocking)
    if (mode === "AUTO_DENY" && result.level === "HIGH") {
      Alert.alert(
        "Interaction Denied",
        "Strong indicators of malicious intent detected.\n\nRecommendation: Do not engage or respond.",
        [{ text: "Understood" }]
      );
      return;
    }

    // Warn / informational mode
    Alert.alert(
      "Defense Assessment",
      `${result.level} RISK\nScore: ${result.score}\n\nAnalysis performed locally.\nNo data transmitted.`,
      [{ text: "OK" }]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SwarmSlayer Scan</Text>

      <Text style={styles.text}>
        Analyze messages and behaviors to prevent malicious intent before it
        becomes actionable.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Paste message, call notes, or behavior details"
        placeholderTextColor="#94a3b8"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={runScan}>
        <Text style={styles.buttonText}>Run Defense Scan</Text>
      </TouchableOpacity>

      <View style={styles.pill}>
        <Text style={styles.pillText}>
          {result.level} RISK • SCORE {result.score}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 12
  },
  text: {
    fontSize: 15,
    color: "#cbd5f5",
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    width: "100%",
    minHeight: 120,
    backgroundColor: "#020617",
    borderColor: "#334155",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8
  },
  buttonText: {
    color: "#020617",
    fontSize: 16,
    fontWeight: "bold"
  },
  pill: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: "#0f172a"
  },
  pillText: {
    color: "#38bdf8",
    fontWeight: "600"
  }
});
