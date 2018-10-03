const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 
    const urlParts = url.pathname.split('/').slice(1);

    console.log(url);

    if(req.method === 'GET' && urlParts[0] === 'happy-birthday') {

        const extra = url.query.custom ? ' ' + url.query.custom : '';
        res.end(`<html><body><p>Happy Birthday <strong>${urlParts[1]}!</strong>${extra}</p></body></html>`);
    }
    else {
        res.end('hello world');
    }

}
