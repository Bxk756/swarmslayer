import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "SWARMSLAYER_SCAN_HISTORY";

function generateHTML(scans) {
  const rows = scans
    .map(
      (s) => `
      <tr>
        <td>${new Date(s.timestamp).toLocaleString()}</td>
        <td>${s.input || "-"}</td>
        <td>${s.risk}</td>
        <td>${s.score}</td>
      </tr>
    `
    )
    .join("");

  return `
  <html>
    <head>
      <style>
        body { font-family: Arial; padding: 24px; background:#0b1020; color:#fff; }
        h1 { color:#22c55e; }
        table { width:100%; border-collapse: collapse; margin-top:20px; }
        th, td { border:1px solid #334155; padding:10px; text-align:left; }
        th { background:#020617; }
      </style>
    </head>
    <body>
      <h1>SwarmSlayer – Scan Report</h1>
      <p>Total scans: ${scans.length}</p>

      <table>
        <tr>
          <th>Date</th>
          <th>Input</th>
          <th>Risk</th>
          <th>Score</th>
        </tr>
        ${rows}
      </table>
    </body>
  </html>
  `;
}

export async function exportScansToPDF() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  const scans = raw ? JSON.parse(raw) : [];

  if (!scans.length) {
    alert("No scans to export yet.");
    return;
  }

  const html = generateHTML(scans);

  const file = await Print.printToFileAsync({
    html,
    base64: false,
  });

  await Sharing.shareAsync(file.uri, {
    mimeType: "application/pdf",
    dialogTitle: "Export Scan History",
  });
}
