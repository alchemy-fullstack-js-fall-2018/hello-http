const request = require('supertest');
const app = require('../lib/app');

describe('app request', () => {

    it('says happy birthday with stranger if no name is provided', () => {
        return request(app).get('/happy-birthday/stranger')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>stranger!</strong> </p></body></html>');
            });
    });

    it('says happy birthday with name', () => {
        return request(app).get('/happy-birthday/mikey')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>mikey!</strong> </p></body></html>');
            });
    });

    it('says their input', () => {
        return request(app).get('/happy-birthday/mikey?custom=your fabulous')
            .then(response => {
                expect(response.text).toEqual('<html><body><p>Happy Birthday <strong>mikey!</strong> your fabulous</p></body></html>');
            });
    });

    it('provides interesting facts', () => {
        return request(app).get('/fact')
            .then(response => {
                expect(response.text).toContain('http');
            });
    });    

});


