const fs = require("fs");
const inquirer = require("inquirer");

//Import classes from ./lib/shapes directory
const { Square, Circle, Triangle } = require("./lib/shapes")

//Function to create logo for inquirer prompts
function createLogo() {
    inquirer
        .prompt([
    {
        type: "input",
        name:"text",
        message:"Please enter the text (up to 3 characters).",
    },

    {
        type: "input",
        name:"textColor",
        message: "Please enter text color (or a hexadecimal number).",
    },

    {
        type: "checkbox",
        name:"shape",
        message: "Please select the shape.",
        choices: ["Circle", "Triangle", "Square"],
    },

    {
        type: "input",
        name:"shapeColor",
        message: "Please enter shape color (or a hexadecimal number).",
    }
])
  .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Please enter no more than 3 characters.")
        createLogo();
      } else {
        const svg = makeShape(response);
        fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
      }
    });
  }
  

function init() {
  inquirer 
  .prompt(questions)
  .then((response) => {
      createLogo(response);
      })
  .catch(err => {
          console.log(err)
      });
}

init();