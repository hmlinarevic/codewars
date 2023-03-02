const turnNumberToArray = (num) => {
  return `${num}`.split('');
};

Math.round = function (number) {
  const ar = turnNumberToArray(number);
  // lets check if number is a float
  const index = ar.indexOf('.');

  // case when number is not a float
  if (index === -1) {
    return Number(ar.join(''));
  }
  // case when number is a float
  else {
    const num = Number(ar.slice(0, index).join(''));
    const firstDecimalNumber = ar[index + 1];

    return firstDecimalNumber >= 5 ? num + 1 : num;
  }
};

Math.ceil = function (number) {
  const ar = turnNumberToArray(number);
  // lets check if number is a float
  const index = ar.indexOf('.');

  // case when number is not a float
  if (index === -1) {
    return Number(ar.join(''));
  }
  // case when number is a float
  else {
    return Number(ar.slice(0, index).join('')) + 1;
  }
};

Math.floor = function (number) {
  const ar = turnNumberToArray(number);
  // lets check if number is a float
  const index = ar.indexOf('.');

  // case when number is not a float
  if (index === -1) {
    return Number(ar.join(''));
  }
  // case when number is a float
  else {
    return Number(ar.slice(0, index).join(''));
  }
};

console.log({
  round: Math.round(5.5),
  ceil: Math.ceil(10123.1),
  floor: Math.floor(15.91),
});

// other solutions use
// toString()
