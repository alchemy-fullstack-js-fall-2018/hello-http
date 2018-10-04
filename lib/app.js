const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);
    const custom = url.query.custom;

    if(parts[0] === 'happy-birthday' && custom) {
        if(!parts[1]) parts[1] = 'Stranger';
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong> ${custom}</p></body></html>`);
    }
    else if(parts[0] === 'happy-birthday') {
        if(!parts[1]) parts[1] = 'Stranger';
        res.end(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`);
    }
    else if(parts[0] === 'fact') {
        let facts = ['The term HTTP was coined by Ted Nelson.',
            'The standard port for HTTP connections is port 80.',
            'The first version of HTTP was introduced in 1991'];
        let random = Math.floor(Math.random() * 3);
        let fact = JSON.stringify({ fact: facts[random] });
        console.log('fact', fact);
        res.end(fact);
    }
    else if(req.method === 'GET') {
        res.end('hello world');
    }
};
