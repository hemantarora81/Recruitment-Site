// const express = require('express');
// const JobSeeker = require('../models/JobSeeker');

// const router = express.Router();

// router.post('/jobseeker', async (req, res) => {
//     console.log(req.body)
//     try {
//         const newJobSeeker = new JobSeeker(req.body);
//         await newJobSeeker.save();
//         res.status(201).json({ message: 'Job Seeker information saved successfully.' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to save job seeker information.' });
//     }
// });

// module.exports = router;
const express = require('express');
const multer = require('multer');
const JobSeeker = require('../models/JobSeeker');

const router = express.Router();

// Configure multer
const upload = multer({ dest: 'uploads/' }); // Set destination for uploaded files

router.post('/jobseeker', upload.single('resume'), async (req, res) => {
    // console.log('Request Body:', req.body);
    // console.log('Uploaded File:', req.file);

    try {
        const newJobSeeker = new JobSeeker({
            fullName: req.body.fullName,
            email: req.body.email,
            mobile: req.body.mobile,
            qualification: req.body.qualification,
            designation: req.body.designation,
            gender: req.body.gender,
            experience: req.body.experience,
            resume: req.file ? req.file.path : undefined // Save file path if a file was uploaded
        });

        await newJobSeeker.save();
        res.status(201).json({ message: 'Job Seeker information saved successfully.' });
        // res.success(true).json({ message: 'Job Seeker information saved successfully.' });
    } catch (error) {
        console.error('Error:', error); // Log detailed error
        res.status(500).json({ error: 'Failed to save job seeker information.', details: error.message });
    }
});

module.exports = router;
