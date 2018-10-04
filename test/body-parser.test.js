const { EventEmitter } = require('events');
const bodyParser = require('../lib/body-parser');

describe('bodyParser', () => {
    it('parses json body', () => {
        let req = new EventEmitter();
        req.header = {};
        req.header['content-type'] = 'application/json';

        const promise = bodyParser(req)
            .then(body => {
                expect(body).toEqual({ name: 'test' });
            });
        
        req.emit('data', JSON.stringify({
            name: 'test',
        }));

        req.emit('end');

        return promise;
    });
});
