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
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Mack!</strong> </p></body></html>');
            });
    });
    it('responds Happy Birthday Stranger when no name is given', () => {
        return request(app).get('/happy-birthday')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Stranger!</strong> </p></body></html>');
            });
    });
    it('responds Happy Birthday Mack with custom input', () => {
        return request(app).get('/happy-birthday/Mack?custom=Hi')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Mack!</strong> Hi</p></body></html>');
            });
    });
    it('gives random http fact', () => {
        return request(app).get('/fact')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Mack!</strong> Hi</p></body></html>');
            });
    });
});
