const request = require('supertest');
const app = require('../lib/app');

describe('simple http server', () => {
    it('responds with greeting on GET', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual('hello world');
        });
    });
});


