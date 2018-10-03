const { parse } = require('url');

module.exports = (request, response) => {
    // use node's built in url parser
    const url = parse(request.url, true);  
    // ['happy-birthday', '<name>']
    const parts = url.pathname.split('/').slice(1);
    console.log(url.query);

    // response.end('my super awesome server that will work');
    //url.query.custom is how you obtain the value 
    //  ?custom= 
    if(request.method === 'GET' && parts[0] === 'happy-birthday') {
        const name = parts[1] || 'stranger';
        let custom = '';
        console.log(parts);
        if(url.query.custom) {
            custom = url.query.custom;
        }
        response.setHeader('Content-Type', 'text/html');
        response.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`);
    } else {
        response.end('not found');
    }
};
