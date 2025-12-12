import React, { useMemo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { styles } from "../ui/styles";
import { scoreScamRisk, normalizeNumber } from "../services/classifier";
import { addHistory } from "../services/history";

export default function HomeScreen() {
  const [number, setNumber] = useState("");
  const [notes, setNotes] = useState("");

  const result = useMemo(
    () => scoreScamRisk({ number, notes }),
    [number, notes]
  );

  async function scan() {
    const clean = normalizeNumber(number);
    if (!clean) {
      Alert.alert("Missing number", "Enter a phone number.");
      return;
    }

    await Haptics.notificationAsync(
      result.level === "HIGH"
        ? Haptics.NotificationFeedbackType.Error
        : Haptics.NotificationFeedbackType.Warning
    );

    await addHistory({
      ts: Date.now(),
      number: clean,
      notes,
      level: result.level,
      score: result.score
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SwarmSlayer</Text>
      <Text style={styles.subtitle}>Scan a number for scam risk</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Caller number"
          placeholderTextColor="#64748b"
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TextInput
          placeholder="What did they say?"
          placeholderTextColor="#64748b"
          value={notes}
          onChangeText={setNotes}
          style={[styles.input, { minHeight: 80 }]}
          multiline
        />

        <TouchableOpacity style={styles.btn} onPress={scan}>
          <Text style={styles.btnText}>SCAN NUMBER</Text>
        </TouchableOpacity>

        <View style={styles.pill}>
          <Text style={styles.pillText}>
            {result.level} RISK • {result.score}
          </Text>
        </View>
      </View>
    </View>
  );
}
