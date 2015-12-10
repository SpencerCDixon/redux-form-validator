import { formValidator } from '../index';
import { expect } from 'chai';

describe('formValidator()', () => {
  it('returns a function', () => {
    const validate = formValidator({});
    expect(validate).to.be.a('function')
  });
});

