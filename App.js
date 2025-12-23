import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

// ✅ Correct Expo asset import (this fixes prod + web)
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo */}
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="SwarmSlayer Logo"
      />

      {/* Title */}
      <Text style={styles.title}>SwarmSlayer</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        A scam awareness and deterrence assistant designed to help users
        identify, document, and report suspicious calls — safely and responsibly.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Coming Soon on Google Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logo: {
    width: 220,
    height: 220,
    marginBottom: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#cbd5e1",
    textAlign: "center",
    maxWidth: 520,
    marginBottom: 32,
    lineHeight: 24,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 999,
  },

  secondaryButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 999,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
