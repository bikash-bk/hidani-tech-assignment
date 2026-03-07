const skillsList = require("../utils/skillDictionary");

function parseJD(description) {

  const jdSkills = [];

  const text = description.toLowerCase();

  skillsList.forEach(skill => {

    if (text.includes(skill)) {
      jdSkills.push(skill);
    }

  });

   

  return jdSkills;
}

module.exports = parseJD;