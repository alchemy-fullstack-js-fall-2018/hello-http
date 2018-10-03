/* eslint no-console: off */

const app = require('./lib/app');
const http = require('http');

//keeping this momentarily till the weekend for refrence
// curl '' -d '{ "name": "ryan" }'
const server = http.createServer(app);

const PORT = 7890;

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});
