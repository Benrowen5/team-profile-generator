// Create an employee object as a base for the other employee role objects
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;