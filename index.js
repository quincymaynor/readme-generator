// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your project installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your project usage information',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license do you want to use?',
      choices: ['None', 'Apache_2.0', 'Boost_1.0', 'BSD_3', 'CC0_1.0', 'EPL_1.0', 'GPLv3', 'Hippocratic_3.0', 'IPL_1.0', 'ISC', 'MIT', 'MPL_2.0', 'Artistic_2.0', 'Unlicense'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your project contribution guidelines',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What is your project test instructions',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'userName',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'emailAddress',
    },
  ];

// Function to write README file
function mdTemp (data) {
return `# ${data.projectTitle}   [![License](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

${data.description}

## Table of Contents

<ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
</ul>

## Installation

${data.installation}

## Usage

${data.usage}

## License

Distributed under the ${data.license} license

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
${data.userName}, https://github.com/${data.userName}

${data.emailAddress}

`
}

function writeToFile(fileName, data) {    
    fs.writeFile(fileName, mdTemp(data), (err) => err 
    ? console.error(err) 
    : console.log('New README created!')
    );
}

// Function to initialize app
function init() {   
inquirer
    .prompt(questions)

    .then((data) => writeToFile('generatedREADME.md', data));
}

// Function call to initialize app
init();
