import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "swarmMemory";

// Normalize text into a stable fingerprint
function fingerprint(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function loadMemory() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : {};
}

export async function updateMemory(text) {
  const fp = fingerprint(text);
  const memory = await loadMemory();

  if (!memory[fp]) {
    memory[fp] = {
      count: 1,
      firstSeen: Date.now(),
      lastSeen: Date.now(),
    };
  } else {
    memory[fp].count += 1;
    memory[fp].lastSeen = Date.now();
  }

  await AsyncStorage.setItem(KEY, JSON.stringify(memory));
  return memory[fp];
}

export async function checkMemory(text) {
  const fp = fingerprint(text);
  const memory = await loadMemory();
  return memory[fp] || null;
}
