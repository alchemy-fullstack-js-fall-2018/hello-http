const { parse } = require('url');
const sayHappyBirthday = require('./happy-birthday');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);

    let facts = [
        {
            fact: 'When HTTP was a very young little protocol, its only method was GET'
        },
        {
            fact: 'There are safe and unsafe HTTP methods. Safe methods do not change any state on the server, while unsafe methods have the potential to do so. POST, PUT, and DELETE are all unsafe methods.'
        },
        {
            fact: 'HTTP was developed at CERN in Switzerland in the late 1980s and early 90s'
        }
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    if(parts[0] === 'hi') {
        res.end('"hey back at you"');
    }
    else if(parts[0] === 'happy-birthday') {
        res.setHeader('Content-Type', 'text/html');
        let name = parts[1] ? parts[1] : 'Stranger';
        let queryString = url.query.custom ? url.query.custom : '';
        res.end(sayHappyBirthday(name, queryString));
    }
    else if(parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        let randomFactIndex = getRandomInt(facts.length);
        res.end(`${JSON.stringify(facts[randomFactIndex].fact)}`);
    }
    else if(req.method === 'GET') {
        res.end('"Hello World"');
    }
};
