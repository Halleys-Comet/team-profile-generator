const Employee = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('mitch', 4, 'mitch@test.com', 'whitewater')

    // test to check if name is a string
    expect(intern.name).toBe('mitch');
    // test to check if id is a number
    expect(intern.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(intern.email).toEqual(expect.any(String));

    // test to check if school is string
    expect(intern.school).toEqual(expect.any(String));

    expect(engineer.getName()).toBe('mitch');
    expect(engineer.getId()).toBe(14);
    expect(engineer.getEmail()).toBe('mitch@test.com');
    expect(engineer.getRole()).toBe('intern');

});