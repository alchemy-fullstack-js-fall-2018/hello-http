const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);

    console.log(parts);

    if(parts[0] === 'hi') {
        res.end('"hey back at you"');
    }
    else if(parts[0] === 'happy-birthday' && parts[1] !== undefined) {
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`);
    }
    else if(req.method === 'GET') {
        res.end('"Hello World"');
    }
};
