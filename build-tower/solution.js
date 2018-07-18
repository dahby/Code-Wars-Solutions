function towerBuilder(nFloors) {
  const tower = [];
  let counter = nFloors;
  let block = 1;
  while (counter > 0) {
    let string = '';
    for (let i = 0; i < (counter - 1); i++) {
      string += ' ';
    }
    for (let j = 0; j < block; j++) {
      string += '*';
    }
    for (let i = 0; i < (counter - 1); i++) {
      string += ' ';
    }
    tower.push(string);
    counter--;
    block += 2;
  }
  return tower;
}