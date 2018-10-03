const assert = require('assert');
const sayHappyBirthday = require('../lib/happy-birthday');

describe('my birthday helper function', () => {
    it('will add a supplied name and optional query string to a birthday greeting', () => {
        expect(sayHappyBirthday('Al', 'You Rock')).toEqual('<html><body><p>Happy Birthday <strong>Al!</strong>You Rock</p></body></html>');
    });
});
