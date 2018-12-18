let expect = require('chai').expect;
import LoginPage from 'Login.page';

describe('login form', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open();
        LoginPage.username.setValue;
        LoginPage.password;
    });
});