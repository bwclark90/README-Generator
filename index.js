
const { writeFile } = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')


// array of questions for user
const questions = [{
  type: "input",
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
  message: "How does it work?",
  name: "usage"
},
{
  type: "list",
  message: "Does your project have a license?",
  name: "license",
  choices: [
    "none",
    "GPL 3.0",
    "MIT",
    "BSD 3",
    "APACHE 2.0"
  ]

},
{
  type: "input",
  message: "Input your GitHub name.",
  name: "contact"
}

];

const promptUser = () => {
  return inquirer
    .prompt(questions)
}



// function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data, err => {
    if (err) { console.log(err) }
    console.log('ReadME created!')
  })

}

// function to initialize program
function init() {
  promptUser()
  .then(info => {
    let markdown = generateMarkdown(info)
    // console.log(info)
    writeToFile('README.md', markdown)
  })
  .catch(err => {
    console.log(err)
  })

}

// function call to initialize program
init();
