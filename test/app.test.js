const request = require('supertest');
const app = require('../lib/app');

describe('my http server', () => {
    it('will respond with "Hello World" on GET', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('"Hello World"');
        });
    });

    it('responds with "hey back at you" when path is /hi', () => {
        return request(app).get('/hi')
            .then(res => {
                expect(res.text).toEqual('"hey back at you"');
            });
    });

    it('responds Happy Birthday <name>! when path is /happy-birthday/<name>', () => {
        return request(app).get('/happy-birthday/Al')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Al!</strong></p></body></html>');
            });
    });

    it('will add custom text to happy birthday from query string', () => {
        return request(app).get('/happy-birthday/Al?custom=You Rock')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Al!</strong>You Rock</p></body></html>');
            });
    });

    it('will give a fact about http when given the path /fact', () => {
        return request(app).get('/fact')
            .then(res => {
                expect(res.text).toContain('HTTP');
                // expect(/http/i.test(res)).toBeTruthy();
            });
    });
});


