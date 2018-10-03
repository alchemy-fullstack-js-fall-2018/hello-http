const { parse } = require('url');
//const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);  
    const parts = url.pathname.split('/');

    //console.log ('url:', url);
    console.log ('parts:', parts);

    switch(parts[1]) {
        case 'happy-birthday':
            res.end(`<html><body><p>Happy Birthday <strong>${parts[2]}!</strong></p></body></html>`);
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