const request = require('supertest');

const app = require('../lib/app');

describe('simple http server', () => {
    it('responds hello world to basic get request', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('hello world');
        });
    });

    it('responds with a birthday + name greeting if the method is `GET` and url (path) is `/happy-birthday/<name>`', () => {
        return request(app).get('/happy-birthday/universe').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>universe!</strong></p></body></html>');
        });
    });

    it('responds with an added custom message', () => {
        return request(app).get('/happy-birthday/universe?custom=You%20Rock').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>universe!</strong> You Rock</p></body></html>');
        });
    });

});
