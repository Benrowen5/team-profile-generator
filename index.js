const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const render = require('./src/pageTemplate');

const team = [];

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
        console.log(team);
    })
};

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

// function createManager() {
//     console.log(`you selected manager`);
// };

createManager();