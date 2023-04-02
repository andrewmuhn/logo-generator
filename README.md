# Logo Generator

## Description

- The goal for developing this spp was to create a logo-generator that took in a users desired text, color, and shape and generated a simple SVG graphic with it.
- I built this project in order to continue developing fluencey with server side applications with Node.js
- I further solidify my understanding of classes and OOP in js.
- I am begining think of how TDD can be utilized to ease development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)

## Installation

First clone this repo into your local directory. Then in order to install dependencies run the following command in your CLI:


	npm i


(Note: Node.js and npm need to be installed to perform this action. Installing Node.js will also install npm)

## Usage

Inorder to generate your own logo's using this project first insall the project using the steps above.
Once the project is installed it can be used by running the following command:

	npm start

or

	node index.js

Then follow the prompts in your CLI and enter in required information to have a logo generated. It will me called 'logo.svg'. This file can then be copied and renamed in your project repository.

Video of application being used:

![Example Usage](./assets/images/demo.gif)

[link to demo video](https://drive.google.com/file/d/1l7335hXSynEFSEIdpOgOzt-T4eovoKjf/view)

## Credits

Project created by [Andrew Muhn](https://github.com/andrewmuhn)
as part of UofO Edx Bootcamp

Utilized:

- [node.js](https://nodejs.org/en/about)
- [inquirer](https://www.npmjs.com/package/inquirer/v/2.0.0)
- [jest](https://jestjs.io/)
- [Validate-Color](https://github.com/dreamyguy/validate-color)

Credits to tutrals and forums used:

- [HexCode RegEx](https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation?rq=3)
- [Basic SVG Shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)


## Tests

If you wish to see the tests run, be sure to install Jest (it should have installed when you ran the 'npm i' command earlier). You cantten run the following commands in your CLI:

	npm test



