const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const handleError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1); // Exit the process with an error code
  } else {
    console.error(`An unexpected error occurred: ${err.message}`);
    process.exit(1);
  }
};

const handleListen = () => {
  console.log(`Server is listening on port ${server.address().port}`);
};

server.on('error', handleError);

// Use server.listen() with an error callback to check for port availability
server.listen(port, handleListen); 
