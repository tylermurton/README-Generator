const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Include any necessary installation codes needed."
    },
    {
        type: "input",
        name: "usage",
        message: "What will this project be used for?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses will go along with this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How can others contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Describe any tests that need to be done for this project."
    },
    {
        type: "input",
        name: "author",
        message: "What is your name and email?"
    }
])
}

const init =  () => {
    questions()
        .then(data => {
            fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
                if (err) {
                    throw err;
                }
                console.log('Your README has been created in the "dist" folder!')
            });
        })

}


function writeToFile(fileName, data) {
}





init();