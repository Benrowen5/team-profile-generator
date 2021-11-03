const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

function createTeam () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Who would you like to add to the team?',
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
    .then(result => {
        if (result.add === "Manager") {
            createManager();
        }
    });
};

function createManager() {
    console.log(`you selected manager`);
};

createTeam();