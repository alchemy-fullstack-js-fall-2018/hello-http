const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 
    const urlParts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' && urlParts[0] === 'happy-birthday') {
        const name = urlParts[1] || 'Stranger';
        const extra = url.query.custom ? ' ' + url.query.custom : '';
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong>${extra}</p></body></html>`);
    }
    else if(req.method === 'GET' && urlParts[0] === 'fact') {

        const facts = [
            'http stands for hypertext transfer protocol',
            'http sits on top of the TCP/IP system',
            'http is unencrypted'
        ];
        const fact = facts[Math.floor(Math.random() * 3)];
        const json = JSON.stringify(fact);
        res.setHeader('content-type', 'application/json');
        res.end(json);
    }
    else {
        res.end('hello world');
    }

};
