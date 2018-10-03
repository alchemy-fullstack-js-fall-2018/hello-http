const { parse } = require('url');
// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    
    if(parts[0] === 'happy-birthday' && req.method === 'GET') {
        let custom = url.query.custom;
        let name = parts[1] ? parts[1] : 'Stranger';
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong>${custom}</p></body></html>`);
    }
    else if(parts[0] === 'fact' && req.method === 'GET') {
        let facts = [{ fact: 'http stands for hypertext transfer protocol' }, { fact: 'http allows for communication between a variety of hosts and clients' }, { fact: 'http is a stateless protocol' }];
        let ranNum = Math.floor((Math.random() * 3));
        res.end(`${facts[ranNum].fact}`);
    }
};