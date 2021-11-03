const Employee = require('./Employee');

// create a Manager object extending from Employee class 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return 'Manager';
    }   
}

module.exports = Manager;