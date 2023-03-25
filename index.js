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
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Error: A valid GitHub username is required.");
            }
            return true;
        }
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
