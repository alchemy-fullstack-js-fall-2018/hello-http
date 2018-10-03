const { parse } = require('url');

module.exports = (request, response) => {
    // use node's built in url parser
    const url = parse(request.url, true);  
    // ['happy-birthday', '<name>']
    const parts = url.pathname.split('/').slice(1);
    console.log(url.query);

    // response.end('my super awesome server that will work');
    //url.query.custom is how you obtain the value 

    if(request.method === 'GET' && parts[0] === 'happy-birthday' && parts[1]) {
        let custom = '';
        if(url.query.custom) {
            custom = url.query.custom;
        }
        response.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong> ${custom}</p></body></html>`);
    } else {
        response.end('not found');
    }
};
