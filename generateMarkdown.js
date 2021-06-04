// function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}
${data.license === 'none' ? '' : `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`}

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
${data.license === 'none' ? '' : '* [License](#license)'}
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)

## Description
${data.description}

## Usage
${data.usage}

## Installation
When opening the repo, you have to install the npm packages for the README generator to work. The files include: 
<ul><li>inquirer<li><ul>
Enter this into console: ${data.installation}

${data.license === 'none' ? '' : `## License
${data.license}`}

## Contributing
${data.contributors}

## Tests
To run tests on program, enter: ${data.tests} into console

## Contact
GitHub name ${data.contact}








`;
}

module.exports = generateMarkdown;
