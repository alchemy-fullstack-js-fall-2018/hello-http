/* eslint no-console: off */

const app = require('./lib/app');
const http = require('http');

const server = http.createServer(app); //extracts what is in app

const PORT = 7890;

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});