//import modules
const http = require('http');

const app = require('./index');

const port = 3001;

// create http server object
const server = http.createServer(app);

//listening on port 3001
server.listen(port);
