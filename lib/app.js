const { parse } = require('url');
//const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    
    const url = parse(req.url, true);  
    const urlParts = url.pathname.split('/');

    const command = urlParts[1];
    const name = urlParts[2] || 'Stranger';
    const extraMessage = url.query.custom;

    switch(command) {
        case 'happy-birthday':
            if(extraMessage) {
                res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${extraMessage}</p></body></html>`);
            } else {
                res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong></p></body></html>`);
            }
            break;
        case 'fact':
            break;
        default:
            res.end('problem');
    }

    // if(parts[0] === 'hello') {
    //     res.end('hi there');
    // } else if(req.method === 'GET') {
    //     res.end('hello world');
    // }
};