const request = require('supertest');

const app = require('../lib/app');

describe('simple http server', () => {
    it('says "hello there" on GET', () => {
        return request(app).get('/')
            .then(res => {
                expect(res.text).toEqual('hello there');
            });
    });

    it('responds Happy Birthday Mack', () => {
        return request(app).get('/happy-birthday/Mack')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Mack!</strong> </p></body></html>');
            });
    });
    it('responds Happy Birthday Stranger when no name is given', () => {
        return request(app).get('/happy-birthday')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Stranger!</strong> </p></body></html>');
            });
    });
    it('responds Happy Birthday Mack with custom input', () => {
        return request(app).get('/happy-birthday/Mack?custom=Hi')
            .then(res => {
                expect(res.text).toEqual('<html><body><p>Happy Birthday <strong>Mack!</strong> Hi</p></body></html>');
            });
    });
    it('gives random http fact', () => {
        return request(app).get('/fact')
            .then(res => {
                expect(res.text).toMatch(/http/);
            });
    });

    it('responds with 404 to not found', () => {
        return request(app).get('/yabadabadoo')
            .then(res => {
                expect(res.status).toEqual(404);
                expect(res.text).toMatch(/CANNOT/);

            });
    });

    //TODO: 
    //Generate Random Http Facts and test that they come through as JSON
    //Return 404 Not Found Test and Functionality.
});
