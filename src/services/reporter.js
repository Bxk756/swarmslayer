import * as Linking from "expo-linking";

export async function reportTo7726({ number, notes }) {
  const body = encodeURIComponent(
    `Suspected scam from ${number}. Notes: ${notes || "n/a"}`
  );
  const url = `sms:7726?body=${body}`;

  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    await Linking.openURL("sms:7726");
  }
}
