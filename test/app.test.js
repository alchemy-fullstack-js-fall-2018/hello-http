const request = require('supertest');

const app = require('../lib/app');

describe('simple http server', () => {
    it('says "hello there" on GET', () => {
        return request(app).get('/')
            .then(res => {
                expect(res.text).toEqual('hello there');
            });
    });
});
