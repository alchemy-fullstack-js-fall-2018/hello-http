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

    const facts = [
        'Fact 1: This is the first fact about http',
        'Fact 2: This is a second fact about http',
        'Fact 3: This is a third fact about http'
    ];

    const min = 0;
    const max = facts.length - .001;
    return { 'fact': facts[getRandomInt(min, max)] };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}