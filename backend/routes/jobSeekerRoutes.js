const express = require('express');
const uploader = require("../multer");
const { jobSeeker } = require('../controllers/jobSeekerController');
const { getAllJobSeekers } = require("../controllers/jobSeekerController");
const router = express.Router();

router.post('/jobseeker', uploader.single("resume"), jobSeeker);
// ✅ GET request to fetch all job seekers
router.get("/jobseekerInfo", getAllJobSeekers);

module.exports = router;



