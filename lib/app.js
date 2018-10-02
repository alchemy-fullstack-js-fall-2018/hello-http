const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);

    console.log(parts);
    
    if(req.method === 'GET') {
        res.end('"Hello World"');
    }
};
