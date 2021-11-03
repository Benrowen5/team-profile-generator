const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
   const employee = new Employee('Jerry', 5, 'jerry@aol.com');

   expect(employee.name).toBe('Jerry');
   expect(employee.id).toEqual(5);
   expect(employee.email).toBe('jerry@aol.com');
});

test('Gets the name of an employee', () => {
   const employee = new Employee('Jerry', 5, 'jerry@aol.com');

   expect(employee.getName()).toBe('Jerry')
});

test('Gets the id of an employee', () => {
   const employee = new Employee('Jerry', 5, 'jerry@aol.com');

   expect(employee.getId()).toEqual(5);
});

test('Gets the email of an employee', () => {
   const employee = new Employee('Jerry', 5, 'jerry@aol.com');

   expect(employee.getEmail()).toBe("jerry@aol.com");
});

test('Gets the role of an employee', () => {
   const employee = new Employee('Jerry', '5', 'jerry@aol.com');

   expect(employee.getRole()).toBe('Employee');
});