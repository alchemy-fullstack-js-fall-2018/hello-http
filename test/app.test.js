const request = require('supertest');
const app = require('../lib/app');

describe('simple http server', () => {
    it('responds with hello when path is /happy-birthday/<name>', () => {
        return request(app).get('/happy-birthday/Jane?custom=You Rock')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Jane!</strong>You Rock</p></body></html>');
            });
    });

    it('responds with stranger when there is no name', () => {
        return request(app).get('/happy-birthday?custom=You Rock')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Stranger!</strong>You Rock</p></body></html>');
            });
    });

    it('responds with a random fact when the path is /fact and the method is GET', () => {
        return request(app).get('/fact')
            .then(res => {
                const facts = ['http stands for hypertext transfer protocol', 'http allows for communication between a variety of hosts and clients', 'http is a stateless protocol'];
                expect(facts).toContain(res.text);
            });
    });
});