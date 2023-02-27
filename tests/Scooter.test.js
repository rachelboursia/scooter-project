const Scooter = require('../src/Scooter');
const User = require('../src/User');

describe('Scooter test', () => {
  let scooterTest;
  let userTest;
  
  beforeEach(() => {
    scooterTest = new Scooter('Station 1');
    userTest = new User('rachelboursia', 'password', 'Rachel', 'Boursia', 23);
  });

  test('scooter === object', () => {
    const scooterType = new Scooter('Station 1');
    expect(typeof scooterType).toBe('object');
  });

  test('rent method for low battery', () => {
    scooterTest.charge = 10;
    expect(() => {
      scooterTest.rent(userTest);
    }).toThrowError('Scooter needs to be charged');
  });

  test('rent method for broken scooter', () => {
    scooterTest.isBroken = true;
    expect(() => {
      scooterTest.rent(userTest).toThrowError('Scooter has to be repaired') 
    });
  });

  test('dock method', () => {
    scooterTest.dock('Station 2');
    expect(scooterTest.station).toBe('Station 2');
    expect(scooterTest.user).toBe(null);
  });
});
