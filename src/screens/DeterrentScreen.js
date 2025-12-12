import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { styles } from "../ui/styles";
import { grandmaBait, reverseJohn, deterrentScript } from "../services/speechKits";

export default function DeterrentScreen() {
  const [speaking, setSpeaking] = useState(false);

  async function play(lines, opts = {}) {
    Speech.stop();
    setSpeaking(true);

    for (const line of lines) {
      await new Promise((resolve) => {
        Speech.speak(line, {
          rate: opts.rate || 0.9,
          pitch: opts.pitch || 1,
          onDone: resolve,
          onStopped: resolve
        });
      });
    }
    setSpeaking(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deterrent Modes</Text>
      <Text style={styles.subtitle}>User-triggered speech deterrents</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => play(grandmaBait, { pitch: 1.3 })}
      >
        <Text style={styles.btnText}>GRANDMA MODE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => play(reverseJohn, { pitch: 0.9 })}
      >
        <Text style={styles.btnText}>REVERSE JOHN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnAlt}
        onPress={() => play(deterrentScript)}
      >
        <Text style={styles.btnText}>DETERRENT NOTICE</Text>
      </TouchableOpacity>

      {speaking && (
        <TouchableOpacity style={styles.btnAlt} onPress={() => Speech.stop()}>
          <Text style={styles.btnText}>STOP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
