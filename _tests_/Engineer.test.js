const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer ('Engineer', 'jessica', 14, 'jessica@test.com', 'Jessicagit')

    // test to check if name is a string
    expect(engineer.name).toBe('jessica');
    // test to check if id is a number
    expect(engineer.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(engineer.email).toEqual(expect.any(String));

    // test to check if github is string
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));

    expect(engineer.getName()).toBe('jessica');
    expect(engineer.getId()).toBe(14);
    expect(engineer.getEmail()).toBe('jessica@test.com');
    expect(engineer.getRole()).toBe('Engineer');

});