// src/utils/scanLogic.js

const HIGH_RISK_PATTERNS = [
  { pattern: /arrest/i, weight: 40 },
  { pattern: /legal action/i, weight: 35 },
  { pattern: /account suspended/i, weight: 30 },
  { pattern: /irs/i, weight: 35 },
  { pattern: /social security/i, weight: 30 },
  { pattern: /warrant/i, weight: 40 },
  { pattern: /verify immediately/i, weight: 25 },
  { pattern: /final notice/i, weight: 25 },
  { pattern: /gift card/i, weight: 40 },
  { pattern: /bitcoin/i, weight: 30 },
];

const MEDIUM_RISK_PATTERNS = [
  { pattern: /urgent/i, weight: 15 },
  { pattern: /verify/i, weight: 15 },
  { pattern: /click here/i, weight: 20 },
  { pattern: /limited time/i, weight: 10 },
  { pattern: /reset password/i, weight: 20 },
  { pattern: /unusual activity/i, weight: 20 },
  { pattern: /prize/i, weight: 15 },
  { pattern: /winner/i, weight: 15 },
];

function countMatches(text, patterns) {
  let score = 0;
  let hits = 0;

  patterns.forEach(({ pattern, weight }) => {
    if (pattern.test(text)) {
      score += weight;
      hits += 1;
    }
  });

  return { score, hits };
}

function repeatPenalty(text, previousScans) {
  const matches = previousScans.filter(
    scan => scan.input && scan.input.toLowerCase() === text.toLowerCase()
  );

  if (matches.length === 0) return 0;

  // Increase risk if exact message seen multiple times
  return matches.length * 5;
}

function lengthHeuristic(text) {
  if (text.length > 200) return 10;
  if (text.length < 10) return 5;
  return 0;
}

function normalizeScore(score) {
  if (score <= 0) return 0;
  if (score > 100) return 100;
  return score;
}

export function runScan(input, notes = "", previousScans = []) {
  const combinedText = `${input} ${notes}`.trim();

  if (!combinedText) {
    return {
      risk: "LOW",
      score: 0,
      indicators: [],
    };
  }

  let indicators = [];

  const high = countMatches(combinedText, HIGH_RISK_PATTERNS);
  const medium = countMatches(combinedText, MEDIUM_RISK_PATTERNS);

  let totalScore = high.score + medium.score;

  if (high.hits > 0) indicators.push("High-risk language detected");
  if (medium.hits > 0) indicators.push("Suspicious phrasing detected");

  totalScore += repeatPenalty(input, previousScans);
  totalScore += lengthHeuristic(combinedText);

  totalScore = normalizeScore(totalScore);

  let riskLevel = "LOW";

  if (totalScore >= 70) {
    riskLevel = "HIGH";
  } else if (totalScore >= 30) {
    riskLevel = "MEDIUM";
  }

  if (riskLevel === "LOW" && totalScore === 0) {
    indicators.push("No known scam indicators detected");
  }

  return {
    risk: riskLevel,
    score: totalScore,
    indicators,
  };
}
