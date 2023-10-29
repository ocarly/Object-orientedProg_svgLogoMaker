const inquirer = require("inquirer");
const fs = require("fs");
const questions = require
const { Circle, Square, Triangle } = require("./lib/shapes");
const path = require("path");
const SVG = require("./lib/svg");
const { sourceMapsEnabled } = require("process");

function svcLogo(response) {

}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => console.log(err))};

    init();