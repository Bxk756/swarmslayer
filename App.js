import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Platform } from "react-native";
import { Asset } from "expo-asset";

const logoAsset = Asset.fromModule(require("./assets/logo.png"));

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: logoAsset.uri }}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="SwarmSlayer Logo"
      />

      <Text style={styles.title}>SwarmSlayer</Text>

      <Text style={styles.subtitle}>
        A scam awareness and deterrence assistant designed to help users identify,
        document, and report suspicious calls — safely and responsibly.
      </Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Coming Soon on Google Play</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Contact Support</Text>
        </Pressable>
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 260,
    height: 260,
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    textAlign: "center",
    maxWidth: 520,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 16,
  },
  primaryButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  secondaryButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
