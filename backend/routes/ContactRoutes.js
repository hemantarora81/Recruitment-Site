const express = require("express");
const { submitContactForm, getAllContacts } = require("../controllers/ContactController");

const router = express.Router();

// ✅ POST: Submit Contact Form
router.post("/contact", submitContactForm);

// ✅ GET: Retrieve All Contact Messages (Admin use)
router.get("/contact", getAllContacts);

module.exports = router;
