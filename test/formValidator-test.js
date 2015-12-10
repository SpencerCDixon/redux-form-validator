import { formValidator, Rectangle } from '../index';

describe('formValidator()', () => {
  it('returns a function', () => {
    const validate = formValidator({});
    expect(validate).to.be.a('function')
  });
});

describe('Rectangle', () => {
  it('lets me create a new one', () => {
    let rectangle = new Rectangle(10);
  });
});
