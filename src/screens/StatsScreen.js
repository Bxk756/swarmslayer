import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Svg, { Rect } from "react-native-svg";

const STORAGE_KEY = "SWARMSLAYER_SCAN_HISTORY";

export default function StatsScreen() {
  const [stats, setStats] = useState({
    total: 0,
    high: 0,
    medium: 0,
    low: 0,
  });

  useFocusEffect(
    useCallback(() => {
      loadStats();
    }, [])
  );

  async function loadStats() {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      const scans = raw ? JSON.parse(raw) : [];

      let high = 0;
      let medium = 0;
      let low = 0;

      scans.forEach((scan) => {
        if (scan.risk === "HIGH") high++;
        else if (scan.risk === "MEDIUM") medium++;
        else low++;
      });

      setStats({
        total: scans.length,
        high,
        medium,
        low,
      });
    } catch (err) {
      console.error("Failed to load stats", err);
    }
  }

  const max = Math.max(stats.high, stats.medium, stats.low, 1);

  function Bar({ value, color }) {
    const height = (value / max) * 120;
    return (
      <Svg width="60" height="140">
        <Rect
          x="10"
          y={140 - height}
          width="40"
          height={height}
          rx="6"
          fill={color}
        />
      </Svg>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Protection Stats</Text>
      <Text style={styles.subtitle}>
        Your device has actively defended you.
      </Text>

      <View style={styles.grid}>
        <StatCard label="Total Scans" value={stats.total} color="#22c55e" />
        <StatCard label="High Risk Blocked" value={stats.high} color="#ef4444" />
        <StatCard label="Medium Risk" value={stats.medium} color="#f59e0b" />
        <StatCard label="Low Risk" value={stats.low} color="#22c55e" />
      </View>

      <Text style={styles.sectionTitle}>Threat Distribution</Text>

      <View style={styles.chart}>
        <View style={styles.barGroup}>
          <Bar value={stats.high} color="#ef4444" />
          <Text style={styles.barLabel}>High</Text>
        </View>

        <View style={styles.barGroup}>
          <Bar value={stats.medium} color="#f59e0b" />
          <Text style={styles.barLabel}>Medium</Text>
        </View>

        <View style={styles.barGroup}>
          <Bar value={stats.low} color="#22c55e" />
          <Text style={styles.barLabel}>Low</Text>
        </View>
      </View>

      <Text style={styles.footer}>
        You’ve blocked {stats.high} high-risk scam attempts so far.
      </Text>
    </ScrollView>
  );
}

function StatCard({ label, value, color }) {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={styles.cardValue}>{value}</Text>
      <Text style={styles.cardLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
  },
  title: {
    color: "#22c55e",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 30,
  },
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: "#020617",
  },
  cardValue: {
    color: "#e5e7eb",
    fontSize: 26,
    fontWeight: "bold",
  },
  cardLabel: {
    color: "#94a3b8",
    marginTop: 4,
  },
  sectionTitle: {
    color: "#e5e7eb",
    fontSize: 18,
    marginBottom: 12,
  },
  chart: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  barGroup: {
    alignItems: "center",
  },
  barLabel: {
    color: "#94a3b8",
    marginTop: 6,
  },
  footer: {
    color: "#22c55e",
    marginTop: 20,
  },
});
