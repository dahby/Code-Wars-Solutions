function stockList(listOfArt, listOfCat) {
  console.log(listOfArt, listOfCat);
  let result = '';
  if (listOfCat.length < 1 || listOfArt.length < 1) {
    return result;
  }
	//isolate first character
	// const firstChar = [];
	const numMap = {};
	

	for (let x = 0; x < listOfCat.length; x++) {
    numMap[listOfCat[x]] = undefined;
  }
  console.log(numMap);

	for (let i = 0; i < listOfArt.length; i++) {
		let firstLetter = listOfArt[i][0];
    console.log(firstLetter);
		let currNum = 0;
		let numString = '';
		let flag = false;
		// firstChar.push(firstLetter);

		//isolate number
		for (let j = 0; j < listOfArt[i].length; j++) {
			if (listOfArt[i][j] === ' ') {
				flag = true;
			}
			if (flag === true) {
				numString += listOfArt[i][j];
			}
		}
    // console.log(numMap[firstLetter])
		currNum = parseInt(numString);
		if (numMap[firstLetter]) {
			numMap[firstLetter] += currNum;
		} else {
			numMap[firstLetter] = currNum;
		}
		console.log('totals', numMap);
	}
	for (let k = 0; k < listOfCat.length; k++) {
    if (numMap[listOfCat[k]] === undefined) {
      result += `(${listOfCat[k]} : 0)`;
    }
	  if (numMap[listOfCat[k]]) {
	    console.log('matchas;dlf', numMap[listOfCat[k]]);
      result += `(${listOfCat[k]} : ${numMap[listOfCat[k]]})`;
	  }
    if (k < (listOfCat.length - 1)) {
      result += ' - ';
    }
	}
  return result;
}