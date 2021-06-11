// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username? (Required)',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                return console.log("Please enter your GitHub username!")
            }
        }
    },
    {
        type: 'input',
        name: 'githubRepo',
        message: 'What is the name of your GitHub repo? (Required)',
        validate: githubRepoInput => {
            if (githubRepoInput) {
                return true;
            } else {
                return console.log("Please enter your GitHub repo!")
            }
        }
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                return console.log("Please enter a project title!")
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a description of your project. (Required)',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                return console.log("Please enter a project description!")
            }
        }
    },
    {
        type: 'input',
        name: 'projectSteps',
        message: 'If applicable, provide the steps required to install your project.'   
    },
    {
        type: 'input',
        name: 'projectInstructions',
        message: 'Provide instructions and examples of your project in use.'   
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Choose a license for your project.',   
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
    },



    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>  {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been generated.');
    })
}

// TODO: Create a function to initialize app
function init() {
   // .prompt(questions)
   // .then(response => {
    //    console.log(response);
   // });
}

// Function call to initialize app
init();
