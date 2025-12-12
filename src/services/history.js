import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "SWARMSLAYER_HISTORY_V1";

export async function loadHistory() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function addHistory(entry) {
  const list = await loadHistory();
  const next = [entry, ...list].slice(0, 50);
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export async function clearHistory() {
  await AsyncStorage.removeItem(KEY);
}
