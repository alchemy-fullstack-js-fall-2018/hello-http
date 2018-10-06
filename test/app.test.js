const request = require('supertest');
const app = require('../lib/app');
 
describe('simple http server', () => {

    it('only accepts GET requests', () => {
        return request(app).post('/happy-birthday/John')
            .then(res => {
                expect(res.text).toEqual('404 Not Found. Cannot POST /happy-birthday/John');
            });
    });

    describe('happy birthday', () => {

        it('responds with <html><body><p>Happy Birthday <strong>USER</strong></p></body></html> if method is GET and url is /happy-birthday/USER', () => {
            return request(app).get('/happy-birthday/John')
                .then(res => {
                    expect(res.text).toEqual(
                        '<html><body><p>Happy Birthday <strong>John!</strong> </p></body></html>'
                    );
                });
        });
    
        it('replaces name with "Stranger" if there is no name supplied', () => {
            return request(app).get('/happy-birthday/')
                .then(res => {
                    expect(res.text).toEqual(
                        '<html><body><p>Happy Birthday <strong>Stranger!</strong> </p></body></html>'
                    );
                });
        });
    
        it('gives a separate response if GET request does not start with /happy-birthday/', () => {
            return request(app).get('/happy-anniversary')
                .then(res => {
                    expect(res.text).toEqual('Sorry, we only celebrate birthdays and facts here...sad panda ;(');
                });
        });
    
        it('adds custom response for query strings', () => {
            return request(app).get('/happy-birthday/Jane&custom=You%20Rock')
                .then(res => {
                    expect(res.text).toEqual(
                        '<html><body><p>Happy Birthday <strong>Jane!</strong> You Rock</p></body></html>'
                    );
                });
        });
    });

    describe('facts', () => {

        it('returns a random fact when url begins with "/fact"', () => {
            return request(app).get('/fact')
                .then(res => {
                    expect(res.text).toContain('HTTP');
                });
        });


    });

});
