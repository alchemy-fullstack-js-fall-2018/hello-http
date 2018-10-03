const request = require('supertest');
const app = require('../lib/app');

describe('simple http server', () => {
    it('responds with hello world on GET', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('hello world');
        });
    });

    it('responds with hi there when path is /hello', () => {
        return request(app).get('/hello')
            .then(res => {
                expect(res.text).toEqual('hi there');
            });
    });

    it('responds with birthday message if /happy-birthday <name> is received', () => {
        return request(app).get('/happy-birthday/Buddy')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Buddy!</strong></p></body></html>');
            });
    });

    it('responds with Happy Birthday Stranger! if no name is received', () => {
        return request(app).get('/happy-birthday')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>');
            });
    });

    it('responds with an added message if a custom query is received', () => {
        return request(app).get('/happy-birthday/Buddy?custom=Lookin%20Good!')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Buddy!</strong> Lookin Good!</p></body></html>');
            });
    });
});

