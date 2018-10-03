const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 
    const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' && parts[0] === 'happy-birthday') {
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`);
    }
    else {
        res.end('hello world');
    }

}
