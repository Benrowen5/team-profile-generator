const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const render = require('./src/pageTemplate');

const team = [];


function runApp() {

    // when application starts, enter team manager information
    function createManager () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the manager's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email address:",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's ID:",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number:",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(responses => {
            const manager = new Manager (responses.name, responses.email, responses.id, responses.officeNumber);

            team.push(manager);
            // console.log(team);
            createTeam();
        })
    };

    // when application starts, enter team manager information 
    createManager();

};

function createEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the Engineer's GitHub username:",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(result => {
        const engineer = new Engineer (result.name, result.id, result.email, result.gitHub);
        team.push(engineer);
        console.log(team);
        createTeam();
    })
    
}

function createTeam () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Who would you like to add to the team?',
            choices: ["Engineer", "Intern", "exit"]
        }
    ])
    .then(result => {
        if (result.add === "Engineer") {
            createEngineer();
        }
    });
};

runApp();