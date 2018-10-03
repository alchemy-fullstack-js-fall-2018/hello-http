const request = require('supertest');
const app = require('../lib/app');

describe('simple http server', () => {
    it('responds with happy birthday', () => {
        const expected = '<html><body><p>Happy Birthday <strong>Elmo!</strong></p></body></html>';
        return request(app).get('/happy-birthday/Elmo').then(res => {
            expect(res.text).toEqual(expected);
        });
    });

    it.skip('responds with hi there when path is /hello', () => {
        return request(app).get('/hello')
            .then(res => {
                expect(res.text).toEqual('hi there');
            });
    });
});