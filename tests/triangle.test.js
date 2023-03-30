const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
  it('should render a triangle in the given color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});