/*

  The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

  If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

  If

  sz is <= 0 or if str is empty return ""
  sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

  Examples:
  revrot("123456987654", 6) --> "234561876549"
  revrot("123456987653", 6) --> "234561356789"
  revrot("66443875", 4) --> "44668753"
  revrot("66443875", 8) --> "64438756"
  revrot("664438769", 8) --> "67834466"
  revrot("123456779", 8) --> "23456771"
  revrot("", 8) --> ""
  revrot("123456779", 0) --> ""
  revrot("563000655734469485", 4) --> "0365065073456944"

  Example of a string rotated to the left by one position:
  s = "123456" gives "234561".

*/

class Chunk {
  constructor(digitsList) {
    this.digits = digitsList;
  }
  isTarget() {
    const sum = this.digits.reduce((total, digit) => {
      const cubed = Math.pow(digit, 3);
      return (total += cubed);
    }, 0);

    return !Boolean(sum % 2);
  }
  rotateLeft() {
    const first = this.digits[0];

    for (let i = 1; i < this.digits.length; i++) {
      this.digits[i - 1] = this.digits[i];
    }
    this.digits[this.digits.length - 1] = first;
  }
  reverse() {
    this.digits.reverse();
  }
  connect() {
    return this.digits.join("");
  }
}

const createChunks = (str, sz) => {
  const ar = str.split("");
  const chunks = [];

  while (ar.length) {
    if (ar.length >= sz) {
      chunks.push(new Chunk(ar.splice(0, sz)));
    } else {
      ar.splice(0);
    }
  }
  return chunks;
};

const revrot = (str, sz) => {
  if (sz <= 0 || !str || sz > str.length) return "";

  const chunks = createChunks(str, sz);

  const string = chunks
    .reduce((array, chunk) => {
      if (chunk.isTarget()) {
        chunk.reverse();
        array.push(chunk.connect());
      } else {
        chunk.rotateLeft();
        array.push(chunk.connect());
      }
      return array;
    }, [])
    .join("");

  return string;
};

console.log(revrot("66443875", 4));
