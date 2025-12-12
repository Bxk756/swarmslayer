import { scamKeywords, highRiskRegex } from "./scamPatterns";

export function normalizeNumber(raw) {
  return (raw || "")
    .replace(/[^\d+]/g, "")
    .replace(/^00/, "+");
}

export function scoreScamRisk({ number, notes }) {
  const n = normalizeNumber(number);
  const t = (notes || "").toLowerCase();

  let score = 0;
  let reasons = [];

  if (!n) {
    return { score: 0, level: "UNKNOWN", reasons: ["No number provided"] };
  }

  const hits = scamKeywords.filter((k) => t.includes(k));
  if (hits.length) {
    score += Math.min(60, hits.length * 12);
    reasons.push(`Keywords: ${hits.slice(0, 5).join(", ")}`);
  }

  if (highRiskRegex.some((r) => r.test(notes || ""))) {
    score += 30;
    reasons.push("High-risk scam behavior detected");
  }

  let level = "LOW";
  if (score >= 70) level = "HIGH";
  else if (score >= 35) level = "MEDIUM";

  return {
    score,
    level,
    reasons: reasons.length ? reasons : ["No obvious scam markers"]
  };
}
