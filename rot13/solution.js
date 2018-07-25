function rot13(message){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let result = '';
  for (let j = 0; j < message.length; j++) {
    let testLetter = message[j];
    let flag = false;
    if (testLetter === testLetter.toUpperCase()) {
      for (let k = 0; k < alphabet.length; k++) {
        if (testLetter.toLowerCase() === alphabet[k]) {
          if (k < 13) {
            result += alphabet[k + 13].toUpperCase();
            flag = true;
            break;
          } else {
            result += alphabet[k - 13].toUpperCase();
            flag = true;
            break;
          }
        }
      }
  } else {
    for (let k = 0; k < alphabet.length; k++) {
        if (testLetter === alphabet[k]) {
          if (k < 13) {
            result += alphabet[k + 13];
                        flag = true;
            break;
          } else{
            result += alphabet[k - 13];
                        flag = true;
            break;
          } 
        }
      }
  }
  if (flag === false) {
    result += message[j];
  }
  }
  return result;
}
