function cubeOdd(arr) {
  if (arr.some(e => typeof e !== 'number')) 
    return undefined;

  return arr.filter(x => x % 2 !== 0).map(x => x*x*x).reduce((acc, curr) => acc+curr, 0);
}