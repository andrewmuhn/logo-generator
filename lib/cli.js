const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./createLogo');
const { validateHTMLColorName } = require('validate-color')

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
            if (!text || text.length > 3) return console.error('Must enter between 1 and 3 characters');
            return true;
          }
        },
        {
          type: 'input',
          name: 'color',
          message: 'Enter a color keyword or hexdecimal number',
          validate: (color) => {
            if (!color) return console.error('Must provide a color');
            const reg = /^#([0-9a-f]{3}){1,2}$/i;
            if (reg.test(color) || validateHTMLColorName(color)) return true;
            return console.error('Invalid Color. If using hexcode, "#" must be placed before code. If using named color value, check spelling.');
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
      .then(({ text, color, shape }) => {
        this.text = text;
        this.color = color.toLowerCase();
        this.shape = shape;
      })
      .then(() => {
        return writeFile('./examples/logo.svg', createLogo(this.text, this.color, this.shape))
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => console.error(err));
  }
}

module.exports = CLI;