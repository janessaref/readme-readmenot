# README Generator (README, README NOT)

In this project, I’ve created a README generator that is going to write a README.md file for the user using node. With the command line open, the user will run a command "node index.js" or in this case, whatever the file was named and then will be asked a series of questions. The user will just put in their inputs and once that is done, the README.md file will be generated and will include all of the user's inputs. One thing the user needs to note is that if the user plans to run "node index.js" again, any previously saved content in the README.md file will be overwritten. The user has to be sure about the changes that will be made. To know more on how to use this, a demo link is available below at the [usage](#usage) section.

## Table of Contents

* [Technologies Used](#technologies-used)
* [Installing](#installing)
* [Usage](#usage)
* [GIF of Project](#gif-of-project)
* [Image of Project](#image-of-project)
* [Code Snippet](#code-snippet)
* [Author](#author)
* [License](#license)
* [Acknowledgments](#acknowledgments)


## Technologies Used

* [Node.js](https://nodejs.org/en/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Installing

  How to install: 
  - 

## Usage




## GIF of Project

![400](assets/gotquiz.gif)

## Image of Project

Attached below is a screenshot of the prompt questions. I did use the command "npm install chalk" to give the colorful questions.

![readme-generator](assets/readmegenerator.png)


## Code Snippet

In this code snippet, I've created an event listener that works for all the multiple choice buttons and displays the text "correct and incorrect" when the user clicks one of the choices as well that it increases the time which is equal to their score or if they click on the wrong answer, it will decrease the time and their final score.

```
// Event listener for all answer buttons
choicesBtns.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        if (event.target.textContent === triviaQs[i]["correctA"]) {
            correctWrong.textContent = correctIncorrect[0];
            correctWrong.style.color = "green";
            secondsLeft = secondsLeft + 5;
        } else {
            correctWrong.textContent = correctIncorrect[1];
            correctWrong.style.color = "red";
            secondsLeft = secondsLeft - 5;
        };
        questionNumber++;
        if (questionNumber == 10) {
            endQuiz();
        } else {
            triviaQuestions();
        };
    };
});
```

## Author

* Janessa Reeanne Fong

- [Link to Github](https://github.com/janessaref)
- [Link to LinkedIn](https://www.linkedin.com/in/janessafong)

## License

This project is licensed under the MIT License 

## Acknowledgments

* I'd like to acknowledge my tutor Andrew Knapp.
* To my mentors and instructors, Roger Lee, Kerwin Hy, and Manuel Nunes for helping and teaching me throughout this program.
