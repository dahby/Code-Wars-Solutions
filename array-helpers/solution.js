'use strict';

const square = array => {
  return array.map(x => x * x);
}

const cube = array => {
  return array.map(x => x * x * x);
}

const sum = array => {
  const reducer = (acc, curr) => acc + curr;
  return array.reduce(reducer);
}

const average = array => {
  if (array === []) {
    return NaN;
  }
  return (sum(array) / array.length);
}

const even = array => {
  return array.filter(n => ((n % 2) === 0));
}

const odd = array => {
  return array.filter(n => ((n % 2) !== 0));
}