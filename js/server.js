// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body
    res.end('Hello, World!\n');
});

// The server listens on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
