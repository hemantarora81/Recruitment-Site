const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "easyrecruitnew",
  api_key: "687393133859291",
  api_secret: "G2gqPmNMS_o9mEuXuTAPf0xqoOo",
});

module.exports = cloudinary;
