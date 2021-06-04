# README-Generator

Description: 
I created a README generator application using node. The user enters node index.js into console and is prompted for responses to fill in the necessary README fields. 
When the prompt finishes, the user is notified that a README.md file has been created for their program. The fields are neatly displayed with a table of contents section
at the top which when clicked, the screen will move to the chosen section. 

Usage:
To use program, enter: node index.js into console.

Dependencies used:
Inquierer NPM package. To download package enter npm i into console.



https://drive.google.com/file/d/1Z9FYWFeGExbbk6LavRYydKljb8oRLRIv/view?usp=sharing

## User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README```
