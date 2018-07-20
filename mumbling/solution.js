function accum(s) {
	let result = '';
  const lower = s.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    result += lower[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      result += lower[i];
    }
    if (lower[i + 1]) {
      result += '-';
    }
  }
  return result;
}