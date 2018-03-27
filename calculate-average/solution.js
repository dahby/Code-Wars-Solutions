function find_average(array) {
  let total = array.reduce((acc, current) => acc + current);
  return (total / array.length);
}