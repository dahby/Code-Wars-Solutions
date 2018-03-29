function mutateMyStrings(stringOne, stringTwo) {
  let result='';
  for (let i=0;i<stringOne.length;i++) {
    if (stringOne[i] !== stringTwo[i]) {
      result += `${stringTwo.substring(0,i)}${stringOne.substring(i, stringOne.length)}\n`}
    }
  result+=`${stringTwo}\n`
  return(result);
}