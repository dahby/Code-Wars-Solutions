'use strict';

import solution from '../solution';
const test1 = 'camelCase'
const test2 = 'camelCaseTest'

describe('#solution', () => {
  test('Should return the broken camelCase string', () => {
    expect(solution(test1)).toEqual('camel Case');
    expect(solution(test2)).toEqual('camel Case Test');
  });
  test('returns undefined if not a string', () => {
    expect(solution()).toBeUndefined();
  });
});
