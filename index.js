const fs = require("fs");
const inquirer = require("inquirer");

//Import classes from ./lib/shapes directory
const {Circle, Square, Triangle} = require("./lib/shapes")

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
        name:"text-color",
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
        name:"shape-color",
        message: "Please enter shape color (or a hexadecimal number).",
    }
])
  .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Please enter no more than 3 characters.")
        createLogo();
      } else {
        writeToFile("logo.svg", answers)
      }
    });
  }
  
//Function to write to the SVG file using answers from the prompts
function writeToFile(fileName, answers) {
  const { text, textColor, shape, shapeColor } = answers;

  // Generate SVG content based on answers
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="10" y="150" font-size="16" fill="${textColor}">${text}</text>
    </svg>
  `;

  // Write SVG content to the specified file
  fs.writeFile(fileName, svgContent, (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}:`, err);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}



createLogo();