const express = require('express');
const uploader = require("../multer");
const { jobSeeker } = require('../controllers/jobSeekerController');

const router = express.Router();

router.post('/jobseeker', uploader.single("resume"), jobSeeker);

module.exports = router;