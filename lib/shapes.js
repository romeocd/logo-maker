//Define class Shape with constructor to initialize "color" and "color" value

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

//Defines the Square class and inherits the properties in shape class
class Square extends Shape {
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

// Defines the square class and inherits the properties in shape class
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

// Defines the Triangle class and inherits the properties in shape class
class Triangle extends Shape {
    render() {
      
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

//Export the classes
module.exports = {Square, Circle, Triangle}