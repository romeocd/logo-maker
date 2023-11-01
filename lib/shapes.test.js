// Import from shape.js
const { Circle, Square, Triangle } = require("./shapes");

// Test for Triangle shape
describe("Test for Triangle", () => {
  test("triangle test with a blue background", () => {
    const triangle = new Triangle('blue', 'KOD', 'black'); 
    expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="black">KOD</text>
        </svg>
        `
        );
    });
});

// Test for Circle shape
describe("Circle test", () => {
  test("circle test with white background", () => {
    const circle = new Circle('blue','KOD','white');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">KOD</text>
        </svg>
        `
        );
    });
});

// Test for Square shape
describe("Square test", () => {
  test("square with an orange hexadecimal color background", () => {
    const square = new Square('black', 'KOD', '#FFA500');
    expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="black"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="#FFA500">KOD</text>
        </svg>
        `
        );
    });
});