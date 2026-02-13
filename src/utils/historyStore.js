import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "scanHistory";

export async function saveScan(scan) {
  const existing = await AsyncStorage.getItem(KEY);
  const history = existing ? JSON.parse(existing) : [];
  history.unshift(scan);
  await AsyncStorage.setItem(KEY, JSON.stringify(history));
}

export async function getHistory() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function clearHistory() {
  await AsyncStorage.removeItem(KEY);
}
