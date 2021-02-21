const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Manager')

test('create Manager object', () => {
    const manager = new Manager('tom', 3, 'tom@test.com', '823')

    // test to check if name is a string
    expect(manager.name).toBe('tom');
    // test to check if id is a number
    expect(manager.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(manager.email).toEqual(expect.any(String));

    // test to check if officenumber is string
    expect(manager.officenumber).toEqual(expect.any(Number));

    expect(engineer.getName()).toBe('tom');
    expect(engineer.getId()).toBe(14);
    expect(engineer.getEmail()).toBe('tom@test.com');
    expect(engineer.getRole()).toBe('Manager');
});