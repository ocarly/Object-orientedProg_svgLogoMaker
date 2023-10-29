const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
{
    type: 'input',
    name: 'text',
    message: 'Please input 3 letters',
},
{
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text to be?',
},
{
    type: 'list',
    name: 'shape',
    message: 'Shape of logo?',
    choices: ['Circle', 'Triangle', 'Square'],
},
{
    type: 'list',
    name: 'shapeColor',
    message: 'Color of logo? Hex also works.',
},
]
inquirer.prompt(questions)
.then((response) => {
    const text = response.text;
    const textColor = response.textColor;
    const mcShape = response.mcShape;
    const shapeColor = response.shapeColor;

         makeShapes(text,textColor,mcShape,shapeColor);
})
// .catch((err) => console.log(err));
function makeShapes(text, shapeColor, textColor, mcShape){
    if (mcShape === 'Circle') {
        const circle = new Circle(text, textColor, shapeColor)
        return fs.writeFile('logo.svg',circle.render(),(err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("logo.svg has been created.");
            }
        });   
    }
}
if (makeShapes === 'Triangle') {
    const triangle = new Triangle(text, textColor, shapeColor)
    return fs.writeFile('logo.svg',triangle.render(),(err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("logo.svg has been created.");
        }
    });   
}
if (makeShapes === 'Square') {
    const square = new Square(text, textColor, shapeColor)
    return fs.writeFile('logo.svg',square.render(),(err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("logo.svg has been created.");
        }
    });   
}
