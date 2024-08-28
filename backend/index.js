// index.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve frontend if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  });
}

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish a connection

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}`);
});
