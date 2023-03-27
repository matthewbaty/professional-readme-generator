// TODO: Include packages needed for this application
// done? I think...?
// TODO: Create an array of questions for user input
// working now
//packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown.js');

// questions for README
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub Repo?",
        name: 'repo',
    },
    {
        type: 'input',
        message: "What is the title of your application",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please give a brief description of your project",
        name: 'description',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
