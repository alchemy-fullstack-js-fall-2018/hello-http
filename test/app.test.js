const request = require('supertest');
const app = require('../lib/app');

describe('hello http server', () => {

    it('first test', () => {

        return request(app).get('/').then(res => {

            expect(res.text).toEqual('hello world');

        });


    });


});


