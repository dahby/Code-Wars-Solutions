function isNice(arr){
  let n = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr.includes(arr[i]-1) || arr.includes(arr[i]+1)) {
      n++
      } else {
        return false
        }
      }
  if (arr.length === 0) {
  return false
  }
  if (n === arr.length) {
  return true
  }    
}