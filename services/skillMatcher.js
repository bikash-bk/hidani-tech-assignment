function matchSkills(resumeSkills, jdSkills) {

  const analysis = [];

  jdSkills.forEach(skill => {

    analysis.push({
      skill: skill,
      presentInResume: resumeSkills.includes(skill)
    });

  });

  return analysis;
}

function calculateScore(analysis) {

  const matched = analysis.filter(s => s.presentInResume).length;

  const total = analysis.length;

  if (total === 0) return 0;

  return Math.round((matched / total) * 100);
}

module.exports = {
  matchSkills,
  calculateScore
};