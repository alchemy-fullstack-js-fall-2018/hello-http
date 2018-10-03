const { parse } = require('url');

module.exports = (req, res) => {

    const regexForSplit = /\/|&custom=/;
    const url = parse(req.url, true);
    const splitUrl = url.pathname.split(regexForSplit).slice(1);
    const name = splitUrl[1];

    let custom;
    if(splitUrl[2]) {
        custom = splitUrl[2].replace('%20', ' ');
    }

 
    if(req.method !== 'GET') {
        res.end('Sorry, we only accept GET requests :(');

    } else if(splitUrl[0] !== 'happy-birthday') {
        res.end('Sorry, we only celebrate birthdays here...sad panda ;(');

    } else if(name && !custom) {
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong></p></body></html>`);

    } else if(!name) {
        res.end('<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>');
    
    } else if(name && custom) {
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`);

    }
    


};
