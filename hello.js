// Load HTTP module
const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

// Create HTTP server
const server = http.createServer((req, res)=> {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {"Content-type":"text/plain" });
    // Send the response body "Hello World"
    res.end("Hello World\n");
});
// Prints a log once the server starts listening 
server.listen(port, hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${port}/`);
});