const { parse } = require('url');
const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);
    const custom = url.query.custom;

    if(parts[0] === 'happy-birthday' && custom) {
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong> ${custom}</p></body></html>`);
    }
    else if(parts[0] === 'happy-birthday') {
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`);
    }
    else if(req.method === 'GET') {
        res.end('hello world');
    }
};
