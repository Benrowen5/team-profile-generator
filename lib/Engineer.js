const Employee = require('./Employee');

// create an Engineer object extending from Employee class 
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email);
        
        this.gitHub = gitHub;
    }

    getGithub () {
        return this.gitHub;
    }

    getRole () {
        return 'Engineer';
    }   
}

module.exports = Engineer;