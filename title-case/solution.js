'use strict';

function titleCase(title, minorWords) {
  let res = '';
  let lower = title.toLowerCase();
  let conditions = minorWords.toLowerCase();
  let splitStr = lower.split(" ");
  let splitCond = conditions.split(" ");
  let len = splitStr.length;
  let flag = true;
  res = res.concat(`${splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1).toLowerCase()} `)
  for (let x = 1; x < (len - 1); x++) {
    for (let y = 0; y < splitCond.length; y++) {
      if (splitStr[x] === splitCond[y]) {
        res = res.concat(`${splitStr[x]} `);
        flag = false;
      } 
    }
    if (flag === true) {
    let test = splitStr[x].charAt(0).toUpperCase() + splitStr[x].slice(1).toLowerCase();
    res = res.concat(`${test} `);
    }
    flag = true;
  }
  res = res.concat(`${splitStr[len - 1].charAt(0).toUpperCase() + splitStr[len - 1].slice(1).toLowerCase()} `)
}
