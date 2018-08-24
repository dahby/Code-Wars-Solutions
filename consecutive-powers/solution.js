function sumDigPow(a, b) {
  const consecPowers = [];
  for (a; a <= b; a++) {
    if (a > 0 && a < 10) {
      consecPowers.push(a);
    } else {
      let stringedNum = a.toString();
      let sum = 0;
      for (let i = 0; i < stringedNum.length; i++) {
        let digit = parseInt(stringedNum[i]);
        sum += Math.pow(digit, i + 1);
      }
      if (a === sum) {
        consecPowers.push(a);
      }
    }
  }
  return consecPowers;
}