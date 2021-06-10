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
        message: 'If applicable, provide the steps required to install your project.',   
    },

    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
