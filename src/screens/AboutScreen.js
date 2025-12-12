import React from "react";
import { View, Text } from "react-native";
import { styles } from "../ui/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About SwarmSlayer</Text>

      <View style={styles.card}>
        <Text style={styles.small}>
          SwarmSlayer is a scam awareness and deterrent assistant.
        </Text>

        <Text style={styles.small}>
          It does NOT intercept calls, auto-answer, record audio, or control
          telephony functions.
        </Text>

        <Text style={styles.small}>
          All actions are user-triggered to remain compliant with app store
          policies.
        </Text>

        <Text style={styles.small}>
          Part of the Swarm Shield ecosystem.
        </Text>
      </View>
    </View>
  );
}
