const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')


describe('ScooterApp test', () => {
    let appTest;
    beforeEach(() => {
        appTest = new ScooterApp();
})

test('register user method test', () => {
    appTest.registerUser('rachelboursia', 'Password', 23);
    expect(appTest.registerUser()).toBe(this.username, 'has been registered')
});

test('too young test', () => {
    expect(() => {
        appTest.registerUser('rachelboursia', 'Password', 1).toThrowError('Too young to register');
    });
});


test('incorrect password test', () => {
    expect(() => {
        appTest.loginUser('rachelboursia', 'Password1')}).toThrowError('Password is incorrect')
});

test('incorrect username test', () => {
    expect(() => {
        appTest.loginUser('jjjho', 'Password').toThrowError('Username is incorrect')
    });
});

// log out

// rent scooter

// dock scooter

});