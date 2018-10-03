const { parse } = require('url');
// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    console.log('url.query:', url.query);
    
    if(parts[0] === 'happy-birthday' && req.method === 'GET') {
        let custom = url.query.custom;
        let name = parts[1] ? parts[1] : 'Stranger';
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong>${custom}</p></body></html>`);
    }
};