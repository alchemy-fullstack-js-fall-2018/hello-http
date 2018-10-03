const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    const facts = [
        {
            fact: 'http sky is blue'
        },
        {
            fact: 'http grass is green'
        },
        {
            fact: 'http sun is a star'
        }
    ];

    if(req.method === 'GET' &&  parts[0] === 'happy-birthday') {
        const name = parts[1] ? parts[1] : 'Stranger';
        const custom = url.query.message ? url.query.message : ''; 
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong>${custom}</p></body></html>`);
    }
    else if(req.method === 'GET' &&  parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(facts[0]));
    }

    else if(req.method === 'GET') {
        res.end('hello world');
    }
};
