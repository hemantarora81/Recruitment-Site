const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })
  }
  const PORT=5000;
  app.listen(PORT, () => {
    console.log(`API Server is running on ${PORT}`)
  })