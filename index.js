const {prompt} = require('inquirer')
const fs = require('fs')
const { writeFile } = require('fs');
const inquirer = require('inquirer');



// array of questions for user
const questions = [ {
  type:  "input",
  message: "What is the title of your project?",
  name: "title"
},
{ 
  type: "input", 
  message: "Write a short description of your project.",
  name: "description"
},
{
  type: "input",
  message: "Name the contributors.",
  name: "contributors"
},
{
  type: "input",
  message: "How to install dependencies? ",
  name: "installation",
  default: " npm i"

},
{
  type: "input",
  message: "How do you run tests on your program?",
  name: "tests",
  default: "npm run test"
},
{
  type: "input",
  message: "What should the user know about using your repo?",
  name: "usage"
},
{
  type: "list",
  message: "Does your project have a license?",
  name: "license",
  choices: [
    "none",
    "afl-3.0",
    "mit",
    "osl-3.0",
    "apache-2.0"
  ]

},
{
  type: "input",
  message: "Input your GitHub name.",
  name: "name"
}

];

const promptUser = () => {
  return inquirer
  .prompt(questions)
}
promptUser()
// console.log(questions)

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
