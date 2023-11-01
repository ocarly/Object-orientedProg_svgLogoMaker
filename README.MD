# Object-oriented Programming Challenge: SVG Logo Maker
## Description
This application serves the purpose of facilitating the creation of a "logo.svg" file. Users can input a three-character text, choose text color, and select a shape from circle, triangle, or square, along with its color, to generate the logo.

## Installation
Ensure Node.js is installed to run this application.
Create a .gitignore file with node_modules/ and .DS_Store/ to prevent tracking these directories on GitHub.
Set up a package.json by running npm init before installing dependencies.
Install inquirer.js by running npm i inquirer@8.2.4 in the integrated terminal.
Install Jest for testing purposes.
Invoke the application using node index.js.

## Usage
Run the application and respond to the series of prompts to generate a logo.svg for your project.
The prompts are located in the index.js file of this repository.
Press Enter after each response to proceed to the subsequent prompt. Upon completing all prompts, a logo.svg file will be automatically generated.
View the generated logo.svg logo by copying/pasting the code in a live server/browser to see the results.

## Test
Run npm test for testing.

npm test
![npmTest](https://github.com/ocarly/Object-orientedProg_svgLogoMaker/assets/141790916/a534d714-7c4c-4ae5-a44c-8080c889aade)

logo.svg
![logoSVG](https://github.com/ocarly/Object-orientedProg_svgLogoMaker/assets/141790916/cde9110b-df0a-4d2f-a1f9-dc24637095a4)

Video Demo
https://watch.screencastify.com/v/TNOamzmFNsiFeWKMFKhe

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="black"/><text x="50" y="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="green">zoo</text></svg>