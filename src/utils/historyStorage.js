// src/utils/historyStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@swarmslayer_scan_history";

/**
 * Load scan history (newest first)
 */
export async function loadHistory() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Failed to load history", e);
    return [];
  }
}

/**
 * Save a new scan result
 */
export async function saveScan(scan) {
  try {
    const history = await loadHistory();
    const updated = [scan, ...history];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("Failed to save scan", e);
  }
}

/**
 * Clear all history
 */
export async function clearHistory() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn("Failed to clear history", e);
  }
}

