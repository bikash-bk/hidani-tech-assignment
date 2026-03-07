const fs = require("fs");
const pdf = require("pdf-parse");
const skillsList = require("../utils/skillDictionary");

function escapeRegex(skill) {
  return skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractName(text) {

  const lines = text.split("\n");

  for (let line of lines) {

    const cleaned = line.trim();

    if (cleaned.length > 3 && /^[a-zA-Z\s]+$/.test(cleaned)) {
      return cleaned;
    }

  }

  return "Unknown";

}

async function parseResume(filePath) {

  const dataBuffer = fs.readFileSync(filePath);

  const data = await pdf(dataBuffer);

  const text = data.text;

  const lowerText = text.toLowerCase();

  const foundSkills = [];

  skillsList.forEach(skill => {

    const escapedSkill = escapeRegex(skill);

    const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

    if (regex.test(lowerText)) {
      foundSkills.push(skill);
    }

  });

  const name = extractName(text);

  return {
    name: name,
    text: text,
    skills: foundSkills
  };

}

module.exports = parseResume;