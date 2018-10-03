/* eslint no-console: off */
const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);  
    const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' && parts[0] === 'hello') {
        res.end('hi there');

    } else if(req.method === 'GET' && parts[0] === 'happy-birthday') {
        res.setHeader('content-type', 'text/HTML');
        let birthdayBoy = parts[1] || 'Stranger';
        let customQuery = url.query.custom ? ' ' + url.query.custom : '';
        res.end(`<html><body><p>Happy Birthday <strong>${birthdayBoy}!</strong>${customQuery}</p></body></html>`);

    } else if(req.method === 'GET' && parts[0] === 'fact') {
        res.setHeader('content-type', 'application/JSON');
        let httpFacts = 
            [
                { fact: 'http knows where you live.' },
                { fact: 'http ate your leftovers while you were visiting your parents.' },
                { fact: 'http used your toothbrush while you were sleeping.' }
            ];
        
        let fact = httpFacts[Math.floor(Math.random() * httpFacts.length)];
        res.end(JSON.stringify(fact));

    } else {
        res.end('hello world');
    }
};
