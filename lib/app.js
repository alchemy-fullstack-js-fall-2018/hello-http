const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 

    if(req.method !== 'GET') {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} ${url.path}`);
    }

    const urlParts = url.pathname.split('/');
    const command = urlParts[1];
    const name = urlParts[2] || 'Stranger';
    const extraMessage = url.query.custom;

    switch(command) {
        case 'happy-birthday':
            res.setHeader('content-type', 'text/html');
            if(extraMessage) {
                res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${extraMessage}</p></body></html>`);
            } else {
                res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong></p></body></html>`);
            }
            break;
        case 'fact':
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(getFact()));
            break;
        default:
            res.statusCode = 404;
            res.end(`CANNOT GET ${url.path}`);
    }

};

function getFact() {

    // from https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
    const facts = [
        'HTTP Fact 1: Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989.',
        'HTTP Fact 2: The term hypertext was coined by Ted Nelson in 1965.',
        'HTTP Fact 3: The first version of the protocol had only one method, namely GET, which would request a page from a server.',
        'HTTP Fact 4: Some of the methods (for example, HEAD, GET, OPTIONS and TRACE) are, by convention, defined as safe, which means they are intended only for information retrieval and should not change the state of the server.'
    ];

    const min = 0;
    const max = facts.length - .001;
    return { 'fact': facts[getRandomInt(min, max)] };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}