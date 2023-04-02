//packages
const inquirer = require('inquirer');
const fs = require('fs');
// import generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js');

// questions for README/GitHub 
const questions = [
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'personName',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is the title of your application",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please give a brief description of your application",
        name: 'description',
    },
    {
        type: 'input',
        message: "Please provide instructions on how to install your application",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Please provide a brief discription on the guidelines for your application",
        name: 'guidelines',
    },
    {
        type: 'input',
        message: "Please provide a brief discription on how someone can contribute to your application",
        name: 'contribute',
    },
    {
        type: 'input',
        message: "Please provide a brief discription on how someone can test to your project",
        name: 'testing',
    },
    {
        type: 'list',
        message: 'With which of the following licenses would you like to cover your project? (Use arrow keys to select).',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
        default: 'MIT'
    },
];


// TODO: Create a function to write README file
function createReadme(fileName, data) {
    fs.writeFile(filename, data, (error) => {
        if (error) throw (error);
        console.log(`README file ${filename} has been created successfully!`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const fileName = "README.md";
            const data = generateMarkdown(answers);
            createReadme(fileName, data)
        })
};

// Function call to initialize app
init();
