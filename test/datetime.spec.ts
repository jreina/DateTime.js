import { expect } from 'chai';
import { DateTime } from '../src/index';

describe('DateTime', function() {
  it('Should be able to construct an instance without error.', function() {
    expect(() => new DateTime()).to.not.throw();
  });
});
