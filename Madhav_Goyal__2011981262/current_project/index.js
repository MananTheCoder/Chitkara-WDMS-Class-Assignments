const express = require('express');
const app = express();
const port = 3000;

// use current directory as static
app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get('/about', (req, res) => res.sendFile(__dirname + '/about.html'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
