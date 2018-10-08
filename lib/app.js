const { parse } = require('url');

module.exports = (req, res) => {

    const regexForSplit = /\/|&custom=/;
    const url = parse(req.url, true);
    const splitUrl = url.pathname.split(regexForSplit).slice(1);

    const name = splitUrl[1] || 'Stranger';
    let custom = url.query.custom || '';

    if(url.pathname === '/fact') {
        const facts = [
            { fact: 'Not using HTTPS also leaves you vulnerable to more subtle long-range hacking attacks' }, 
            { fact: 'The Hypertext Transfer Protocol (HTTP) is one of the most ubiquitous and widely adopted application protocols on the Internet' }, 
            { fact: 'The HTTP/2 binary framing mechanism has been designed to not require any alteration of the APIs or config files applied: it is broadly transparent to the user.' }
        ];
        const randomNumber = Math.floor(Math.random() * (Math.floor(facts.length)));
        
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(facts[randomNumber].fact));

    } else if(splitUrl[0] !== 'happy-birthday') {
        res.end('Sorry, we only celebrate birthdays and facts here...sad panda ;(');
        
    } else if(splitUrl[0] === 'happy-birthday' && req.method === 'GET') {
        res.end(`<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`);
        
    } else {
        res.end(`404 Not Found. Cannot ${req.method} ${url.pathname}`);
    }

};
