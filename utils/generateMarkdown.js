function generateMarkdown(data) {
  return `
# ${data.title}

// insert badge here

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
This project is licensed by ${data.license}

## Contribution
### ${data.contributing}

## Tests 
### ${data.tests}

## Questions
### ${data.author}


`;
}

module.exports = generateMarkdown;