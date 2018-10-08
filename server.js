const app = require('./lib/app');
const http = require('http');

const server = http.createServer(app);

const PORT = 9876;

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});
