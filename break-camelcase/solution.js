'use strict';

const solution = (string) => {
  if (!string) {
    return undefined;
  } else {
    return camelSplitter(string);
  }
}

const camelSplitter = (string) => {
  const split = (string.split(''));
  let capsCounter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      split.splice(i + capsCounter, 0, ' ');
      capsCounter++;
    }
  }

  return split.join('');
}

export default solution;

