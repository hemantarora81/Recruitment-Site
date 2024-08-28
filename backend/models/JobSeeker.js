const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    mobile: String,
    qualification: String,
    experience: String,
    designation: String,
    gender: String,
    resume: Object
});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);

module.exports = JobSeeker;

