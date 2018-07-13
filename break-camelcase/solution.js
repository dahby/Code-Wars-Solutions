'use strict';

function solution(string) {
  const split = (string.split(''));
  capsCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      split.splice(i + capsCounter, 0, ' ');
      capsCounter++;
    }
  }
  return split.join('');
}

