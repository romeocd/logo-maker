const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//Function to create logo with prompts
function createLogo() {
    inquirer
        .prompt([
    {
        type: "input",
        name:"text",
        message:"Please enter the text.",
        //function to have logo text up to three characters
        validate: function (input) {
            if (input.length <= 3) {
              return true;
            } else {
              return 'Please enter up to 3 characters.';
            }
          },
    },

    {
        type: "input",
        name:"text-color",
        message: "Please enter the text color.",
    },

    {
        type: "checkbox",
        name:"shape",
        message: "Please select the shape.",
        choices: ["Circle", "Triangle", "Square"],
    },

    {
        type: "input",
        name:"shape-color",
        message: "Please enter the shape color.",
    }
])
.then((answers) => {
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${answers.logoColor}" />
        <text x="10" y="50" font-size="16" fill="white">${answers.logoText}</text>
      </svg>
    `;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error writing to logo.svg:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });
}

createLogo();