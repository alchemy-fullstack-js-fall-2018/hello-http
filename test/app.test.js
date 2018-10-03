const request = require('supertest');
const app = require('../lib/app');

describe('happy birthday', () => {
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
});

describe('facts', () => {
    it('responds with a random fact', () => {
        return request(app).get('/fact').then(res => {
            expect(res.text).toContain('HTTP');
        });
    });
});

describe('error messages', () => {
    it('responds with error if request is not GET', () => {
        const path = '/bad-request';
        const expected = `CANNOT POST ${path}`;
        return request(app).post(path).then(res => {
            expect(res.text).toEqual(expected);
        });
    });

    it('responds with error if GET request is unexpected', () => {
        const path = '/bad-request';
        const expected = `CANNOT GET ${path}`;
        return request(app).get(path).then(res => {
            expect(res.text).toEqual(expected);
        });
    });
});
