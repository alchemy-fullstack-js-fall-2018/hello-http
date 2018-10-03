const request = require('supertest');
const app = require('../lib/app');

describe('hello http server', () => {

    it('first test', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('hello world');
        });
    });
    it('Respond with a greeting if GET and url /happy-birthday/<name>', () => {
        return request(app).get('/happy-birthday/GI-Joe').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>GI-Joe!</strong></p></body></html>');
        });
    });
    it('Respond with Stranger if GET and url /happy-birthday/', () => {
        return request(app).get('/happy-birthday/').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>');
        });
    });
    it('Adds custom greeting if provided in query string', () => {
        return request(app).get('/happy-birthday/GI-Joe?custom=Go%20Joe').then(res => {
            expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>GI-Joe!</strong> Go Joe</p></body></html>');
        });
    });


});


