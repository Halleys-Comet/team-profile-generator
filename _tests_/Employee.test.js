const { test, expect } = require("@jest/globals");

const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('John', 25, 'john@test.com')

    // test to check if name is a string
    expect(employee.name).toBe('John');
    // test to check if id is a number
    expect(employee.id).toEqual(expect.any(Number))
    // test to check if email is a string
    expect(employee.email).toEqual(expect.any(String));


});

test('validates name from getName function', () => {
    expect(employee.getName()).toEqual(employee.name)
});

test('validates id from getId function', () => {
    expect(employee.getId()).toEqual(employee.id)
})

test('validates id from getEmail', () => {
    expect(employee.getEmail()).toEqual(employee.email);
})
