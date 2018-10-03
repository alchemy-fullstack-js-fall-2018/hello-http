const request = require('supertest');
const app = require('../lib/app');

describe('app request', () => {

    it('says happy birthday', () => {
        return request(app).get('/happy-birthday/mikey')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>mikey!</strong> </p></body></html>');
            });
    });

    // it('says stranger if no name is provided', () => {
    //     return request(app).get
    // });

    it('says their input', () => {
        return request(app).get('/happy-birthday/mikey?custom=your fabulous')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>mikey!</strong> your fabulous</p></body></html>');
            });
    });

});
