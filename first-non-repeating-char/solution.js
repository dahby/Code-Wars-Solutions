'use strict';

function firstNonRepeatingLetter(s) {
  const lowerString = s.toLowerCase();
  let map = {};
  let lowestRepeater = '';
  for (let i = 0; i < lowerString.length; i++) {
    let currentLetter = lowerString[i];
    if (map[currentLetter]) {
      map[currentLetter] ++
    } else {
      map[currentLetter] = 1;
    }
  }
  for (let i = 0; i < lowerString.length; i++) {
    let currentValue = map[lowerString[i]];
    if (currentValue === 1) {
      lowestRepeater = s[i];
      break;
    }
  }
  return lowestRepeater;
}