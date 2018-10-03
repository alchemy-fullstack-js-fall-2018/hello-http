const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, false); 
    const parts = url.pathname.split('/').slice(1);

    res.end('hello world');
}
