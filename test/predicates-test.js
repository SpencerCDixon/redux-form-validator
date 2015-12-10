import { expect } from 'chai';
import { isObject, isArray, isString, isNumber } from '../src/predicates';
import { cloneWithoutKey } from './helpers';


const primitiveExamples = {
  integer: 42,
  string: 'is the meaning of life',
  missing: undefined,
  notNumber: NaN,
  gone: null,
  object: {},
  array: ['elements in array'],
}

describe('predicates', () => {
  describe('isObject', () => {
    it('returns true if element is object', () => {
      const obj = {};
      expect(isObject(obj)).to.be.true;
    });

    it('returns false if not an object', () => {
      const nonObjects = cloneWithoutKey(primitiveExamples, 'object')

      for (var key in nonObjects) {
        expect(isObject(nonObjects[key])).to.be.false
      }
    });
  });

  describe('isArray', () => {
    it('returns true if element is array', () => {
      const arr = [];
      expect(isArray(arr)).to.be.true
    });

    it('returns false if not an array', () => {
      const nonArray = cloneWithoutKey(primitiveExamples, 'array');

      for (var key in nonArray) {
        expect(isArray(nonArray[key])).to.be.false
      }
    });
  });

  describe('isString', () => {
    it('returns true if element is string', () => {
      const string = 'whats up doc?'
      expect(isString(string)).to.equal(true);
    });

    it('returns false if not a string', () => {
      const nonString = cloneWithoutKey(primitiveExamples, 'string')

      for (var key in nonString) {
        expect(isString(nonString[key])).to.be.false
      }
    });
  });

  describe('isNumber', () => {
    it('returns true for numbers', () => {
      const num = 42;
      expect(isNumber(num)).to.be.true;
    });

    it('returns false if not a number', () => {
      const nonNumbers = cloneWithoutKey(primitiveExamples, 'integer')

      for (var key in nonNumbers) {
        expect(isNumber(nonNumbers[key])).to.be.false
      }
    });
  });
});
