var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) {
      return `${count}<0`;
    }
    if (count === 0) {
      return '0=0'
    }
    let result = '';
    let total = 0;
    for (let x = 0; x < count; x++) {
      total += x;
      result += `${x}+`
    }
    total += count;
    return `${result}${count} = ${total}`;
  };

  return SequenceSum;
});
