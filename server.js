/* eslint no-console: off */

const app = require('app');
const http = require('http');


const server = http.createServer(app);
const PORT = 6789;

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});

// testing:
// curl 'http://localhost:6789/hi' -d '{ "name": "ryan" }'

