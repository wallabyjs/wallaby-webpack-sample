import Person from '../src/Person';

var chai = require('chai');
var expect = chai.expect;

describe('Person', () => {
  it('should report name', () => {
    expect(new Person('John').name).to.equal('John');
  });
});
