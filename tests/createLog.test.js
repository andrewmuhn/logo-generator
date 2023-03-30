const { createLogo } = require('../lib/createLogo.js');

describe('createLogo', () => {
  it('should create html of an SVG with the given text, shape, and color', () => {
    const newLogo = createLogo('TST', 'blue', 'Triangle');
    expect(newLogo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="blue" /> 

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TST</text>

</svg>`);
  });
});