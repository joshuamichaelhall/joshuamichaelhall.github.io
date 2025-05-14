const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dashboard/build')));

// API routes can be added here

// For any other request, send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});