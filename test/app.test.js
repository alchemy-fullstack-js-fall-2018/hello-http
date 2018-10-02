const request = require('supertest');
const app = require('../lib/app');

describe('my http server', () => {
    it('will respond with "Hello World" on GET', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('"Hello World"');
        });
    });
    
});
