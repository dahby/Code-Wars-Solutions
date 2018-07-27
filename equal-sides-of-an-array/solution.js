function findEvenIndex(arr) {
  const reducer = (acc, curr) => acc + curr;
  const arrLen = arr.length; 
  let total = 0;
  let midIndex = null;

  for (let x = 0; x < arrLen; x++) {
    let remainingTotal = 0;
    total += arr[x];
      console.log('total', total);
    for (let y = x + 2; y < arrLen; y ++ ) {
      remainingTotal += arr[y];
    }
    console.log('remainingTotal', remainingTotal);
    if (total === remainingTotal) {
      midIndex = x + 1;
      break;
    }
  }
  if (midIndex === null) {
    midIndex = -1
  }
  return midIndex;
}