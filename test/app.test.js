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

    it('responds Happy Birthday Al when path is /happy-birthday/Al', () => {
        return request(app).get('/happy-birthday/Al')
            .then(res => {
                expect(res.text).toEqual('Happy Birthday Al');
            });
    })
});
