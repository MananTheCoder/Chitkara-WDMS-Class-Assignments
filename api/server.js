const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the 'client' folder
const clientPath = path.resolve(__dirname, '..', 'client');
app.use(express.static(clientPath));

// Handle requests for the root URL ('/')
app.get('/', (req, res) => {
  const indexPath = path.resolve(clientPath, 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Website is on http://localhost:${PORT}`);
});
