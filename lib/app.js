const { parse } = require('url');
// const factFile = require('./factFile');

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

        const http = [
            { 
                fact: 'http is a stateless protocal because each command is executed independently.'
            },
            {
                fact: 'http stands for HyperText Transfer Protocal.'
            }, 
            {
                fact: 'http runs the world!!.'
            }   
        ];
        let facts = http[Math.floor(Math.random() * http.length)];
        response.end(JSON.stringify(facts));
    }
    else {
        response.end('not found');
    }
};
