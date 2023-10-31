//Import from shape.js 
const {Circle, Square, Triangle} = require("./shapes")

//Test for Triangle shape
const shape = new Triangle ();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill = "blue" />');