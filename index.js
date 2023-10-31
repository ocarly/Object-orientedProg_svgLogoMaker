const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/someQuestions")
const { Circle, Square, Triangle } = require("./lib/shapes");
const path = require("path");
const SVG = require("./lib/svg");




function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        let triCirSqu 
        if(response.shape === 'Square'){
            triCirSqu = new Square()
        }else if(response.shape === 'Triangle'){
            triCirSqu = new Triangle()
        }else if(response.shape === 'Circle'){
            triCirSqu = new Circle()
        }
        triCirSqu.setShapeColor(response.shapeColor)
        const finalLogo = new SVG()
        finalLogo.setShape(triCirSqu)
        finalLogo.setText(response.text, response.textColor)
        })
    .catch(err => console.log(err))};

    init();