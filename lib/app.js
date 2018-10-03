const { parse } = require('url');
const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' &&  parts[0] === 'happy-birthday') {
        const name = parts[1] ? parts[1] : 'Stranger';
        const custom = url.query.message ? url.query.message : ''; 
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong>${custom}</p></body></html>`);
    }

    else if(req.method === 'GET') {
        res.end('hello world');
    }
};
