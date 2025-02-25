const JobSeeker = require("../models/JobSeeker");
const cloudinary = require("../Cloudinary");
const path = require("path");

exports.jobSeeker = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded!" });
    }

    // ✅ Allowed file types
    const allowedMimeTypes = {
      "application/pdf": ".pdf",
      "application/msword": ".doc",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
    };

    const fileExtension = allowedMimeTypes[req.file.mimetype];
    if (!fileExtension) {
      return res.status(400).json({ success: false, error: "Invalid file type! Only PDF or Word documents are allowed." });
    }

    const originalFilename = path.parse(req.file.originalname).name; // ✅ Extract filename (no extension)
    const formattedFilename = `${originalFilename}${fileExtension}`; // ✅ Keep filename + extension

    // ✅ Upload to Cloudinary with correct filename
    const upload = await cloudinary.uploader.upload(req.file.path, {
      folder: "resumes",
      resource_type: "raw",
      public_id: `${originalFilename}${fileExtension}`, // ✅ Ensures filename keeps its extension
      use_filename: true,
      unique_filename: false,
      overwrite: true, // ✅ Ensures duplicates are replaced
    });

    let resumeUrl = upload.secure_url; // ✅ Correct Cloudinary URL with extension

    // ✅ Save job seeker details in MongoDB
    const newJobSeeker = new JobSeeker({
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      qualification: req.body.qualification,
      designation: req.body.designation,
      gender: req.body.gender,
      experience: req.body.experience,
      resume: resumeUrl, // ✅ Stores full URL with extension
      resumeFilename: formattedFilename, // ✅ Stores "resume.pdf" or "cv.docx"
    });

    await newJobSeeker.save();

    res.status(200).json({
      msg: "Job Seeker information saved successfully.",
      success: true,
      resumeUrl,
      resumeFilename: formattedFilename,
    });

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to upload resume.",
      details: error.message,
    });
  }
};


// ✅ Get all job seekers with resume URLs
exports.getAllJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.find().select("-__v"); // Exclude __v field
    res.status(200).json({ success: true, jobSeekers });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch job seekers.",
      details: error.message,
    });
  }
};