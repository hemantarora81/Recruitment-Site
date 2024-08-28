const express = require('express');
const JobSeeker = require('../models/JobSeeker');

const router = express.Router();

router.post('/jobseeker', async (req, res) => {
    try {
        const newJobSeeker = new JobSeeker(req.body);
        await newJobSeeker.save();
        res.status(201).json({ message: 'Job Seeker information saved successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save job seeker information.' });
    }
});

module.exports = router;
