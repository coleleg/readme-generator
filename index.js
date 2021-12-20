// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project? (Required)'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'confirm',
        name: 'confirmEmail',
        message: 'Would you like to include your email address?',
        default: true
    },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:',
                when: ({ confirmEmail }) => confirmEmail
            },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for this project:'
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to include install instructions?',
        default: true
    },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter any installation instructions for this project:',
                when: ({ confirmInstall }) => confirmInstall
            },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include usage information?',
        default: true
    },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter usage information for this project:',
                when: ({confirmUsage}) => confirmUsage
            },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to include contribution guidelines?',
        default: true
    },
            {
                type: 'input',
                name: 'contribution',
                message: 'Enter contribution guidelines for this project:',
                when: ({confirmContribution}) => confirmContribution
            },
    {
        type: 'confirm',
        name: 'confirmTesting',
        message: 'Would you like to include testing instructions?',
        default: true
    },
            {
                type: 'input',
                name: 'testing',
                message: 'Enter testing instructions for this project:',
                when: ({confirmTesting}) => confirmTesting
            }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
