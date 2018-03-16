function capitalize(s){
  let arr1=[];
  let arr2=[];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if(i % 2 == 0) {
      arr1.push(arr[i].toUpperCase());
      arr2.push(arr[i]);
    } else {
      arr1.push(arr[i]);
      arr2.push(arr[i].toUpperCase());
      }
    };
  return [arr1.join(''), arr2.join('')];
};