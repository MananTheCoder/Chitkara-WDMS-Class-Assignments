// Import the required modules
const express = require('express');
const path = require('path');

// Create an instance of an Express app
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Serve static files (such as CSS and client-side JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
