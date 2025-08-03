// index.js - Express Backend for Intern Dashboard

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS so your frontend can fetch data
app.use(cors());

// Dummy API route to send intern data
app.get('/api/user', (req, res) => {
  res.json({
    name: "Bhawna Bhadana",
    referral: "bhawna2025",
    donations: 1450
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
