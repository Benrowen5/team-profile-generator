const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('creates a Manager object', () => {
   const manager = new Manager('Jerry', 5, 'jerry@aol.com', 55);

   expect(manager.name).toBe('Jerry');
   expect(manager.id).toEqual(5);
   expect(manager.email).toBe('jerry@aol.com');
   expect(manager.officeNumber).toEqual(55);
});

test("Gets manager's officeNumber", () => {
    const manager = new Manager('Jerry', 5, 'jerry@aol.com', 55);

    expect(manager.getOfficeNumber()).toEqual(55);
});

test("Gets manager's role", () => {
    const manager = new Manager('Jerry', 5, 'jerry@aol.com', 55);

    expect(manager.getRole()).toBe('Manager');
});