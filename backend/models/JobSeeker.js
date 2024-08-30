const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String },
    designation: { type: String },
    gender: { type: String },
    resume: { type: String, required: true }
});

module.exports = mongoose.model('JobSeeker', jobSeekerSchema);
