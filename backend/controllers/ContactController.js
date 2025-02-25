const Contact = require("../models/Contact");

// ✅ Save Contact Form Data
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // ✅ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", details: error.message });
  }
};

// ✅ Get All Messages (For Admin)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // Sort by latest
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve messages" });
  }
};
