// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
      choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
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

// TODO: Create a function to write README file
const fileName = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

const mdTemp = 

`# ${fileName}   [![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)

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

Distributed under the ${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
${data.userName}, https://github.com/${data.userName}

${data.emailAddress}

`

function writeToFile(data) {    
    fs.writeFile(fileName, mdTemp, (err) => err 
    ? console.error(err) 
    : console.log('New README created!')
    );
}

// TODO: Create a function to initialize app
function init() {   
inquirer
    .prompt(questions)

    .then(writeToFile);
}

// Function call to initialize app
init();





const htmlTemp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="name">
        <h1>${data.firstname}</h1>
    </div>
    <div id="location">
        <h1>${data.location}</h1>
    </div>
    <div id="bio">
        <h1>${data.bio}</h1>
    </div>
    <div id="linkedin">
        <h1>${data.linkedin}</h1>
    </div>
    <div id="github">
        <h1>${data.github}</h1>
    </div>
</body>
</html>`

.then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

  fs.writeFile(filename, htmlTemp, (err) => err 
  ? console.error(err) 
  : console.log('New document created!')
  );
});
