const { parse } = require('url');
const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`)
    }
    else if(req.method === 'GET') {
        res.end('hello world');
    }
};
