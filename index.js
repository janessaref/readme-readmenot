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
const chalk = require("chalk");

// inquirer prompt questions
const questions = [{
        type: "input",
        name: "username",
        message: chalk.magenta("What is your GitHub username?"),
    },
    {
        type: "input",
        name: "email",
        message: chalk.blue("What is your email address?"),
    },
    {
        type: "input",
        name: "title",
        message: chalk.yellow("What is the title of your project?"),
    },
    {
        type: "input",
        name: "description",
        message: chalk.red("Please write a short description of your project"),
    },
    {
        type: "confirm",
        name: "license",
        message: chalk.green("Would you like to include a license?"),
    },
    { // list of licenses will only be prompted if the user confirms license to be included
        when: function(data) {
            if (data.license) {
                return true;
            } else {
                return false;
            }
        },
        type: "list",
        name: "badge",
        message: chalk.magenta("What type of license should your project have? Press the Enter key to select"),
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
    },
    {
        type: "input",
        name: "installation",
        message: chalk.blue("What command should be run to install dependencies?"),
    },
    {
        type: "input",
        name: "tests",
        message: chalk.yellow("What command should be run to run tests?"),
    },
    {
        type: "input",
        name: "usage",
        message: chalk.red("What does the user need to know about using the repository?"),
    },
    {
        type: "input",
        name: "contributing",
        message: chalk.green("What does the user need to know about contributing to the repository?"),
    },
    {
        type: "input",
        name: "fullname",
        message: chalk.magenta("What is the author's full name?"),
    },
];

// collects and writes the data
function writeToFile(fileName, data) {

    // prints badges to the README
    if (data.license === true && data.badge === "MIT") {
        data.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
        data.license = "This project is under the MIT license";
    } else if (data.license === true && data.badge === "Apache 2.0") {
        data.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        data.license = "This project is under the Apache 2.0 license";
    } else if (data.license === true && data.badge === "GPL 3.0") {
        data.badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
        data.license = "This project is under the GPL 3.0 license";
    } else if (data.license === true && data.badge === "BSD 3") {
        data.badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        data.license = "This project is under the BSD 3 license";
    } else {
        data.badge = "";
        data.license = "N/A";
    };

    // if the user leaves them blank, "N/A" will be displayed instead on respective sections
    if (data.username === "" || data.email === "" || data.title === "" || data.description === "" || data.installation === "" || data.tests === "" || data.usage === "" || data.contributing === "" || data.fullname === "") {
        data.username = "N/A";
        data.email = "N/A";
        data.title = "N/A";
        data.description = "N/A";
        data.installation = "N/A";
        data.tests = "N/A";
        data.usage = "N/A";
        data.contributing = "N/A";
        data.fullname = "N/A";
    };

    // Stores all the collected data in dataString
    let dataString = generateMarkdown(data);

    // writes the file to the folder "output" where the readme is stored
    fs.writeFile('output/' + fileName, dataString, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(chalk.green("Sucess! Your README has been generated!"));
    });
}

// prompts questions, then generates readme file and writes it
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            const fileName = "README.md";
            writeToFile(fileName, data);
        });
};

init();