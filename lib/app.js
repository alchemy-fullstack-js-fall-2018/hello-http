/* eslint no-console: off */
const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);  
    const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' && parts[0] === 'hello') {
        res.end('hi there');
    }
    
    if(req.method === 'GET' && parts[0] === 'happy-birthday') {
        let birthdayBoy = parts[1] || 'Stranger';
        let customQuery = url.query.custom ? ' ' + url.query.custom : '';
        res.setHeader('content-type', 'text/HTML');
        res.end(`<html><body><p>Happy Birthday <strong>${birthdayBoy}!</strong>${customQuery}</p></body></html>`);
    } else {
        res.end('hello world');
    }
};
