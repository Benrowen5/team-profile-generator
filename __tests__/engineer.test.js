const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jerry', 5, 'jerry@aol.com', 'jerry5');
 
    expect(engineer.name).toBe('Jerry');
    expect(engineer.id).toEqual(5);
    expect(engineer.email).toBe('jerry@aol.com');
    expect(engineer.gitHub).toEqual('jerry5');
 });
 
 test("Gets engineer's GitHub", () => {
     const engineer = new Engineer('Jerry', 5, 'jerry@aol.com', 'jerry5');
 
     expect(engineer.getGithub()).toEqual('jerry5');
 });
 
 test("Gets manager's role", () => {
     const engineer = new Engineer('Jerry', 5, 'jerry@aol.com', 'jerry5');
 
     expect(engineer.getRole()).toBe('Engineer');
 });