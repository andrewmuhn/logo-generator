const Circle = require('../lib/circle.js');

describe('Circle', () => {
  it('should render a Circle in the given color', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});