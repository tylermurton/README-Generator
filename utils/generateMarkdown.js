function generateMarkdown(data) {
  return `
# ${data.title}

![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)



## Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Licences](#licences)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
### ${data.description}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
### ${data.usage}

## Licenses
![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
This project is licensed under ${data.license}.

## Contribution
### ${data.contributing}

## Tests 
### ${data.tests}

## Questions
### ${data.author}


`;
}

module.exports = generateMarkdown;