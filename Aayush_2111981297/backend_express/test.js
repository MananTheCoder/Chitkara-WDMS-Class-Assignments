
const http = require('http');

const server = http.createServer((req, res) => {

//   res.writeHead(200, {'Content-Type': 'text/plain'});
  
res.write("hey all")
// res.write("hey all 1")
res.end('Hello, World!\n'); 
//   res.send('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on port 3000');
});
