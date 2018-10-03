const request = require('supertest');
const app = require('../lib/app');

describe('app request', () => {

    it('says happy birthday', () => {
        return request(app).get('/happy-birthday/mikey')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>mikey!</strong> </p></body></html>');
            });
    });
});
