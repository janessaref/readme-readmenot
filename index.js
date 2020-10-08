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
}, ];

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