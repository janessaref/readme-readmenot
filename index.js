/* 
GOAL: create a readme based on user input from the console
1. import inquirer and fs modules
2. begin prompt questions for the user
3. create a giant string of their answers
4. write to a file

*/
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "project description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "license",
        message: "What type of license should your project have?",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repository?",
    },
    {
        type: "input",
        name: "contributors",
        message: "What does the user need to know about contributing to the repository?",
    }
];

function writeToFile(fileName, data) {
    let dataString = generateMarkdown(data);
    dataString += `#${data.title}`;
    console.log(dataString);

    fs.writeFile(fileName, dataString, function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
            const fileName = "README.md";
            writeToFile(fileName, data);
        })
}

init();