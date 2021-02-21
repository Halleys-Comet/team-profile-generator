const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('Intern', 'mitch', 4, 'mitch@test.com', 'whitewater')

    // test to check if name is a string
    expect(intern.name).toBe('mitch');
    // test to check if id is a number
    expect(intern.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(intern.email).toEqual(expect.any(String));

    // test to check if school is string
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));

    expect(intern.getName()).toBe('mitch');
    expect(intern.getId()).toBe(4);
    expect(intern.getEmail()).toBe('mitch@test.com');
    expect(intern.getRole()).toBe('Intern');

});