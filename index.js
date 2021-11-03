const inquirer = require('inquirer')
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const render = require('./src/pageTemplate');

const team = [];

// Main application which runs at startup
function runApp() {
    // when application starts, enter team manager information
    function createManager () {
        // inquirer prompt for manager information
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
        // create new manager object using input data
        .then(responses => {
            const manager = new Manager (responses.name, responses.id, responses.email, responses.officeNumber);
            // add new manager object to team array
            team.push(manager);
            // console.log(team);
            // call for main menu of application for desired next step
            createTeam();
        })
    };
    // when application starts, enter team manager information 
    createManager();
};

// create a new engineer object when selected from the main application's menu
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
    // create new engineer object using input data
    .then(result => {
        const engineer = new Engineer (result.name, result.id, result.email, result.gitHub);
        team.push(engineer);
        // console.log(team);
        createTeam();
    })
};

// create a new intern object when selected from the main application's menu
function createIntern () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name:",
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
            message: "Please enter the Intern's email address:",
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
            message: "Please enter the Intern's ID:",
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
            name: 'school',
            message: "Please enter the Intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(result => {
        const intern = new Intern (result.name, result.id, result.email, result.school);
        team.push(intern);
        // console.log(team);
        createTeam();
    })
};

// uses all input team data in the team array to populate the pageTemplate file and generate a new team index.html page
function createTeamPage () {
    return new Promise((resolve, reject) => {
        // newly created file will be create in the dist/ folder
        fs.writeFileSync('./dist/index.html', render(team), err => {
            // if there's an error, reject the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                return;
            }
            // if no errors, resolve the promise and send the successful to the .then() method
            resolve({
                ok: true,
                message: 'Team page created!'
            });
        });
        console.log('New team page created!');
    });
};

// 'Main menu' of the application
function createTeam () {
    // prompts for what the user wants to do next
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Who would you like to add to the team?',
            choices: ["Engineer", "Intern", "Finished"]
        }
    ])
    // based on user input, calls the relevant function
    .then(result => {
        if (result.add === "Engineer") {
            createEngineer();
        }
        if (result.add === "Intern") {
            createIntern();
        }
        if (result.add === "Finished") {
            createTeamPage();
        }
    });
};

runApp();