const User = require('../src/User')
const { TestWatcher } = require('jest');


describe('User properties test', () => {
    let userTest;
    beforeEach(() => {
      userTest = new User('rachelboursia', 'Password', 23);
    });
  

    test('new user', () => {
      expect(userTest.username).toBe('rachelboursia');
      expect(userTest.age).toBe(23);
      expect(userTest.loggedIn).toBe(false);
    });

  
    test('log in test', () => {
        userTest.login('Password');
        expect(userTest.loggedIn).toBe(true);
    });
  
    test('incorrect password', () => {
      expect(() => {userTest.login('incorrect')}).toThrowError('Incorrect password');
    });
  
    test('log out test', () => {
        userTest.login('Password');
        userTest.logout();
        expect(userTest.loggedIn).toBe(false);
    });
  });