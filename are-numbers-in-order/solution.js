'use strict';

const inAscOrder = (arr) => {
  let inOrder = true;
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] > arr[x + 1]) {
      inOrder = false;
      return inOrder;
    }
  }
  return inOrder;
}
