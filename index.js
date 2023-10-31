const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions = [
    {
        type: "input",
        name:"text",
        message:"Please enter the text.",
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
    },
    
]