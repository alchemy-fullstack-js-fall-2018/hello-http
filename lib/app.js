// const { parse } = require('url');
// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    // const url = parse(req.url, true);

    // const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET') {
        res.end('hello world');
    }
};
