const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Jerry', 5, 'jerry@aol.com', 'Jerry University');
 
    expect(intern.name).toBe('Jerry');
    expect(intern.id).toEqual(5);
    expect(intern.email).toBe('jerry@aol.com');
    expect(intern.school).toBe('Jerry University');
 });
 
 test("Gets intern's school", () => {
     const intern = new Intern('Jerry', 5, 'jerry@aol.com', 'Jerry University');
 
     expect(intern.getSchool()).toBe('Jerry University');
 });
 
 test("Gets interns's role", () => {
     const intern = new Intern('Jerry', 5, 'jerry@aol.com', 'Jerry University');
 
     expect(intern.getRole()).toBe('Intern');
 });