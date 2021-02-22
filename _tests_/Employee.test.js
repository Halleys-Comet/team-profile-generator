
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Employee', 'john', 25, 'john@test.com')

    // test to check if name is a string
    expect(employee.name).toEqual(expect.any(String));
    // test to check if id is a number
    expect(employee.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(employee.email).toEqual(expect.any(String));
});

test('validates name from getName function', () => {
    const employee = new Employee('Employee', 25, 'john@test.com')

    expect(employee.getName()).toEqual(employee.name)
});

test('validates id from getId function', () => {
    const employee = new Employee('Employee', 25, 'john@test.com')

    expect(employee.getId()).toEqual(employee.id)
})

test('validates id from getEmail', () => {
    const employee = new Employee('Employee', 25, 'john@test.com')

    expect(employee.getEmail()).toEqual(employee.email);
})
