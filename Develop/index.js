// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const Choices = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [  {
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Please provide a description of your project?"
},
{
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions?"
},
{
    type: "input",
    name: "usage",
    message: "Please provide how you'll use this project?"
},
{
    type: "input",
    name: "contributing",
    message: "Please provide the contributing parties"
},
{
    type: "input",
    name: "test",
    message: "Please provide how you'll test for this project?"
},
{
    type: "input",
    name: "username",
    message: "Please provide your github user name?"
},
{
    type: "input",
    name: "repo",
    message: "Please provide your repo link?"
},
{
    type: "type",
    name: "license",
    message: "Please provide the license that you want?",
    Choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT License', 'ISC License'],
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log(success)
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();