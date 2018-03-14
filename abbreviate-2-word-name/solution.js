function abbrevName(name){
  var nameArray = name.toUpperCase().split(' ');
  return `${nameArray[0][0]}.${nameArray[1][0]}`;
}