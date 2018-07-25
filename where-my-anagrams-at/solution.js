function anagrams(word, words) {
  let compare = {};
  let result = [];

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (compare[letter]) {
      compare[letter] ++;
    } else {
      compare[letter] = 1;
    }
  }

  for (let j = 0; j < words.length; j++) {
    const wordLen = word.length;
    let indexLen = words[j].length;
    let flag = null;
    if (indexLen === wordLen) {
      let index = words[j];
      let anagram = {};
      for (let k = 0; k < indexLen; k++) {
        let letter = index[k];
        if (anagram[letter]) {
          anagram[letter] ++;
        } else {
          anagram[letter] = 1;
        }
      }
      for (let key in compare) {
        if (anagram[key] !== compare[key]) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }
      }
      if (flag === true) {
        result.push(words[j]);
      }
    }
      return result;
  }