'use strict';

function toWeirdCase(string) {
	let resultString = '';
	const stringArray = string.toLowerCase().split(' ');
	for (let x = 0; x < stringArray.length; x++) {
		let temp = stringArray[x];
		for (let y = 0; y < temp.length; y++) {
			if (y % 2 === 0) {
				resultString += temp[y].toUpperCase();
			} else {
				resultString += temp[y];
			}
		}
    resultString += ' ';
	}
  resultString = resultString.slice(0, -1);
	return resultString;
}
