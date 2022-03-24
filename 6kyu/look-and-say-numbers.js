/*

  Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

  Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

*/

const lookAndSay = (data, len) => {
  let current = data[0];
  let counter = 0;
  let str = "";

  for (let i = 0; i < data.length; i++) {
    if (current === data[i]) {
      counter++;
    } else {
      str += `${counter}${current}`;
      current = data[i];
      counter = 1;
    }
  }
  str += `${counter}${current}`;

  const result = [];
  result.push(str);

  if (len < 2) {
    return str;
  } else {
    result.push(lookAndSay(str, len - 1));
  }

  return result;
};

const test = lookAndSay("1", 5); // 'one one' --> 11
console.log(test);
// lookAndSay("112113", 4); // 'two one' --> 21
// lookAndSay("21", 3); // 'one two one one' --> 1211
