// include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!")
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address!")
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log("Please enter a project title!")
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log("Please enter a project description!")
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'If applicable, provide the steps required to install your project.'   
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of your project in use.'   
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'   
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',   
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'ISC']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If applicable, provide the written tests for your application and examples on how to run them.'   
    }

];

// create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>  {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been generated.');
    })
}

// create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then(function (userInput) {
         console.log(userInput)
         writeToFile("README.md", generateMarkdown(userInput));
     })
    }

// function call to initialize app
init();
