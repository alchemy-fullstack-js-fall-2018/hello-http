const request = require('supertest');
const app = require('../lib/app');

describe('simple http server', () => {
    it('responds with happy birthday', () => {
        const expected = '<html><body><p>Happy Birthday <strong>Elmo!</strong></p></body></html>';
        return request(app).get('/happy-birthday/Elmo').then(res => {
            expect(res.text).toEqual(expected);
        });
    });

    it('responds with happy birthday plus extra message', () => {
        const expected = '<html><body><p>Happy Birthday <strong>Jane!</strong> You Rock</p></body></html>';
        return request(app).get('/happy-birthday/Jane?custom=You%20Rock').then(res => {
            expect(res.text).toEqual(expected);
        });
    });

    it('responds with Stranger if no name is provided', () => {
        const expected = '<html><body><p>Happy Birthday <strong>Stranger!</strong> You Rock</p></body></html>';
        return request(app).get('/happy-birthday?custom=You%20Rock').then(res => {
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