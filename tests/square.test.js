const Square = require('../lib/square.js');

describe('Square', () => {
  it('should render a square in the given color', () => {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
  });
});