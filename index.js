
const http = require('http');
const port = 8080;

const requestListener = http.createServer((req,res) => {res.end('Hello World')});

requestListener.listen(port, () => {console.log('Server listening on port %s', port)});
