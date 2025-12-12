import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../ui/styles";
import { reportTo7726 } from "../services/reporter";
import { normalizeNumber } from "../services/classifier";

export default function ReportScreen() {
  const [number, setNumber] = useState("");
  const [notes, setNotes] = useState("");

  async function submit() {
    const clean = normalizeNumber(number);
    if (!clean) {
      Alert.alert("Missing number", "Enter a phone number first.");
      return;
    }
    await reportTo7726({ number: clean, notes });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Scam</Text>
      <Text style={styles.subtitle}>Opens SMS app (7726)</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Scammer number"
          placeholderTextColor="#64748b"
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TextInput
          placeholder="What happened?"
          placeholderTextColor="#64748b"
          value={notes}
          onChangeText={setNotes}
          style={[styles.input, { minHeight: 80 }]}
          multiline
        />

        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text style={styles.btnText}>REPORT VIA 7726</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
