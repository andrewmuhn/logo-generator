const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');

const createLogo = (text, color, shape) => {
  let newLogo;
  let y;
  console.log(text);
  console.log(color);
  console.log(shape);

  if (shape === 'Square') {
    newLogo = new Square();
    y = 125;
  } else if (shape === 'Triangle') {
    newLogo = new Triangle();
    y = 150;
  } else if (shape === 'Circle') {
    newLogo = new Circle();
    y = 115;
  }

  newLogo.setColor(color);

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${newLogo.render()} 

  <text x="150" y="${y} " font-size="60" text-anchor="middle" fill="white">${text}</text>

</svg>`;

}

module.exports = { createLogo }