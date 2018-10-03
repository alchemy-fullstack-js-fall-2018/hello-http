module.exports = function randomFact() {
    const http = {
        fact: ''
    };
    
    const randomFacts = [
        'http stands for Hypertext Transfer Protocol',
        'URL beginning with the HTTP scheme and the WWW domain name label. HTTP functions as a request–response protocol in the client–server computing model.',
        'http allows the fetching of resources by working on top of tcp/ip'
    ];

    http.fact = randomFacts[Math.floor((Math.random() * randomFacts.length))];
    return http;
};


