const { parse } = require('url');
const randomFact = require('./random-fact');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' && parts[0] === '') {
        res.end('hello there');
    }
    else if(req.method === 'GET' && parts[0] === 'happy-birthday') {
        let custom = url.query.custom || '';
        let name = parts[1] || 'Stranger';
        name[0].toUpperCase() + name.slice(1);
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`);
    }
    else if(req.method === 'GET' && parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(randomFact()));
    }

    else {
        res.statusCode = 404;
        res.end(res.statusCode + 'CANNOT' + req.method + '' + req.url);
    }
};
