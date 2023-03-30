const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./createLogo');

class CLI {
    constructor() {
        this.text = '';
        this.color = '';
        this.shape = '';
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter up to 3 characters',
                    validate: (text) => {
                        if (!text || text > 3) return console.error('Must enter between 1 and 3 characters')
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter a color keyword or hexdecimal number',
                    validate: (color) => {
                        if (!color) return console.error('Must provide a color')
                        return true;
                    }
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose one of the following shapes',
                    choices: [
                        'Circle',
                        'Triangle',
                        'Square',
                    ],
                }
            ])
            .then(() => {
                this.text = text;
                this.color = color;
                this.shape = shape;
            })
            .then(() => {
                return writeFile('../examples/logo.svg', createLogo(this.text, this.color, this.shape))
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => console.error(err));
    }
}

module.exports = CLI;