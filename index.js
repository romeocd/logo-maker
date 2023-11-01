const fs = require("fs");
const inquirer = require("inquirer");

//Import classes from ./lib/shapes directory
const { Square, Circle, Triangle } = require("./lib/shapes")

//Function to create logo for inquirer prompts
function createLogo(answers) {
    const svg = makeShape(answers);
    if (svg) {
      fs.writeFile("logo.svg", svg, () => console.log('Generated logo.svg'));
    } else {
      console.log("Error: SVG content is undefined.");
    }
  }

const questions = [
    {
        type: "input",
        name:"text",
        message:"Please enter the text (up to 3 characters).",
        validate: (answer) => {
          if (answer.length > 3) {
              return console.log("\n 3 characters max. Please try again");
          }
          return true;
      }
    },
  

    {
        type: "input",
        name:"textColor",
        message: "Please enter text color (or a hexadecimal number).",
    },

    {
        type: "list",
        name:"shape",
        message: "Please select the shape.",
        choices: ["Circle", "Triangle", "Square"],
    },

    {
        type: "input",
        name:"shapeColor",
        message: "Please enter shape color (or a hexadecimal number).",
    }
]

  
function makeShape(answers) {
  if (answers.shape === 'Circle') {
    let userShape = new Circle (answers.shapeColor, answers.text, answers.textColor)
    return userShape.render()
}

if (answers.shape === 'Square') {
    let userShape = new Square (answers.shapeColor, answers.text, answers.textColor)
    return userShape.render()
}

if (answers.shape === 'Triangle') {
    let userShape = new Triangle (answers.shapeColor, answers.text, answers.textColor)
    return userShape.render()
}
};

function init() {
  inquirer 
  .prompt(questions)
  .then((answers) => {
      createLogo(answers);
      })
  .catch(err => {
          console.log(err)
      });
}

init();