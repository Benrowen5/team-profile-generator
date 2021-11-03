const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee.js');

TestWatcher('creates an employee object', () => {
   const employee = new Employee('Ben');

   expect(employee.name).toBe('Ben');
   expect(employee.id).toEqual('1');
   expect(employee.email).toBe('benrowentb@gmail.com');
});