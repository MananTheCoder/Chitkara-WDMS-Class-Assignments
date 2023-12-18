// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Set up static files and views
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
