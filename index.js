const fs = require("fs");
const inquirer = require("inquirer");

//Import classes from ./lib/shapes directory
const { Square, Circle, Triangle } = require("./lib/shapes")

//Function to create logo for inquirer prompts
function createLogo(answers) {
  if (answers.text.length > 3) {
    console.log("Please enter no more than 3 characters.")
    createLogo(answers);
  } else {
    const svg = makeShape(answers);
    fs.writeFile("logo.svg", svg, () => console.log('Generated logo.svg'));
  }
}

const questions = [
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
]

  
function makeShape (answers) {
  if (answers.shape === 'Circle') {
    let newShape = new Circle (answers.shapeColor, answers.text, answers.textColor)
    return newShape.render()
}

if (answers.shape === 'Square') {
    let newShape = new Square (answers.shapeColor, answers.text, answers.textColor)
    return newShape.render()
}

if (answers.shape === 'Triangle') {
    let newShape = new Triangle (answers.shapeColor, answers.text, answers.textColor)
    return newShape.render()
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