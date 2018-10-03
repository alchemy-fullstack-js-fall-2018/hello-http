const request = require('supertest');
const app = require('../lib/app');

describe('simple http server', () => {

    it('responds with greeting on GET', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('hello world');
        });
    });

    it('responds with happy birthday name', () => {
        return request(app).get('/happy-birthday/Jane').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Jane!</strong></p></body></html>');
        });
    });

    it('responds to no name input with happy birthday Stranger', () => {
        return request(app).get('/happy-birthday/Stranger').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>');
        });
    });

    it('responds with happy birthday name, custom!', () => {
        return request(app).get('/happy-birthday/Jane?message=You Rock').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Jane!</strong>You Rock</p></body></html>');
        });
    });
});


