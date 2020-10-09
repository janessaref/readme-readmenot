/* 
GOAL: create a readme based on user input from the console
1. import inquirer and fs modules
2. begin prompt questions for the user
3. create a giant string of their answers
4. write to a file

*/
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown)

const questions = [{
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "list",
            name: "license",
            message: "What type of license should your project have? Press the Enter key to select",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
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
            name: "contributing",
            message: "What does the user need to know about contributing to the repository?",
        },
        {
            type: "confirm",
            name: "table of contents",
            message: "Would you like a table of contents?",
        },
    ]
    // .then(function({ username }) {
    //     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(response) {
//         const userName = response.data.map(function(repo) {
//             return repo.owner.avatar_url;
//         });

// const repoNames = [];
// for (var i = 0; i < res.data.length; i++) {
//   repoNames.push(res.data[i].name);
// }

//   const repoNamesStr = repoNames.join("\n");

//   fs.writeFile("repos.txt", repoNamesStr, function(err) {
//     if (err) {
//       throw err;
//     }

//     console.log(`Saved ${repoNames.length} repos`);
//   });
//     });
// });

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