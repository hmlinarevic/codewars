var maxSequence = function (arr) {
  let sequence = [];
  const results = [];
  const checkSum = () => sequence.reduce((total, num) => (num += total), 0);

  for (let i = 0; i < arr.length; i++) {
    sequence.push(arr[i]);
    results.push(checkSum());

    for (let j = i + 1; j < arr.length; j++) {
      sequence.push(arr[j]);
      results.push(checkSum());
    }

    sequence = [];
  }

  let high = 0;

  results.forEach((el) => {
    if (el > high) high = el;
  });

  return high;
};

console.log(maxSequence([-48, 42, -13, -20, 28]));
