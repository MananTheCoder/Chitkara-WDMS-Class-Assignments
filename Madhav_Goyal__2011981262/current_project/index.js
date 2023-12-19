const express = require('express');
const app = express();
const port = 3000;

// use static
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
