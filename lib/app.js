const { parse } = require('url');
const factFile = require('./factFile');

module.exports = (request, response) => {
 
    const url = parse(request.url, true);  

    const parts = url.pathname.split('/').slice(1);
    
    if(request.method === 'GET' && parts[0] === 'happy-birthday') {
        const name = parts[1] || 'stranger'; 
        let custom = '';
        if(url.query.custom) {
            custom = url.query.custom;
        }
        response.setHeader('Content-Type', 'text/html');
        response.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`);
    } 
    else if(request.method === 'GET' && parts[0] === 'fact') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(factFile()));
    }
    else {
        response.end('404 Not Found');
    }
};
