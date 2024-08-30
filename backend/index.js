const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db'); 
const jobSeekerRoutes = require('./routes/jobSeekerRoutes'); 
const bodyParser = require('body-parser')

const app = express();

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish a connection
app.use(cors())
app.options('*', cors());
app.use(express.json()); 
app.use('/api', jobSeekerRoutes);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve frontend if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}`);
});
