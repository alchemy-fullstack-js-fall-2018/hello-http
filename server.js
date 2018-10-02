const app = require('app');
const http = require('http');

const server = http.createServer(app);

const PORT = 666;

server.listen(PORT, () => {
    console.log('Server running on ', server.address().port);
})