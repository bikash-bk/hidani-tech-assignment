const express = require("express");
const multer = require("multer");

const parseResume = require("../services/resumeParser");
const parseJD = require("../services/jdParser");
const { matchSkills, calculateScore } = require("../services/skillMatcher");

const jobs = require("../data/jobDescriptions.json");

const router = express.Router();

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

const upload = multer({ storage });

router.post("/", upload.single("resume"), async (req, res) => {

  try {

    const filePath = req.file.path;

    const resumeData = await parseResume(filePath);

    const matchingJobs = [];

    jobs.forEach(job => {

      const jdSkills = parseJD(job.description);

      const analysis = matchSkills(resumeData.skills, jdSkills);

      const score = calculateScore(analysis);

      matchingJobs.push({
        jobId: job.jobId,
        role: job.role,
        aboutRole: job.aboutRole,
        skillsAnalysis: analysis,
        matchingScore: score
      });

    });

    const response = {
  name: resumeData.name,
  salary: "Not Mentioned",
  yearOfExperience: 0,
  resumeSkills: resumeData.skills,
  matchingJobs: matchingJobs
};
    res.json(response);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;