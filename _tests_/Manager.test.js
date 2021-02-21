const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager')

test('create Manager object', () => {
    const manager = new Manager('Manager', 'tom', 3, 'tom@test.com', 823)

    // test to check if name is a string
    expect(manager.name).toBe('tom');
    // test to check if id is a number
    expect(manager.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(manager.email).toEqual(expect.any(String));

    // test to check if officenumber is string
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));

    expect(manager.getName()).toBe('tom');
    expect(manager.getId()).toBe(3);
    expect(manager.getEmail()).toBe('tom@test.com');
    expect(manager.getRole()).toBe('Manager');
});