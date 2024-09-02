const JobSeeker = require("../models/JobSeeker");
const cloudinary = require("../Cloudinary");

exports.jobSeeker = async (req, res) => {
  try {
    const upload = await cloudinary.v2.uploader.upload(req.file.path);
    let resume = upload.secure_url;
    // console.log(resume, "resume");
    const newJobSeeker = new JobSeeker({
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      qualification: req.body.qualification,
      designation: req.body.designation,
      gender: req.body.gender,
      experience: req.body.experience,
      resume: resume ? resume : "",
    });

    await newJobSeeker.save();
    // console.log(newJobSeeker, "newJobSeekernewJobSeeker");
    res
      .status(200)
      .json({ msg: "Job Seeker information saved successfully." });
    // res.success(true).json({ message: 'Job Seeker information saved successfully.' });
  } catch (error) {
    console.error("Error:", error); // Log detailed error
    res.status(500).json({
      error: "Failed to save job seeker information.",
      details: error.message,
    });
  }
}
