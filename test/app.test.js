const request = require('supertest');

const app = require('../lib/app');

describe('simple http server', () => {
    it('says "hello there" on GET', () => {
        return request(app).get('/')
            .then(res => {
                expect(res.text).toEqual('hello there');
            });
    });

    it('responds Happy Birthday Mack', () => {
        return request(app).get('/happy-birthday/Mack')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Mack!</strong></p></body></html>');
            });
    });
});
