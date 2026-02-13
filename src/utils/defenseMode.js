import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "defenseMode";

export async function getDefenseMode() {
  const mode = await AsyncStorage.getItem(KEY);
  return mode || "WARN";
}

export async function setDefenseMode(mode) {
  await AsyncStorage.setItem(KEY, mode);
}
