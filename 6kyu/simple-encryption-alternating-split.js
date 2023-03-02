function encrypt(text, n) {
  if (!text || n < 1) return text;

  let odd = [];
  let even = [];
  let result = text.split('');
  let i = 0;

  while (i < n) {
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 0) even.push(result[j]);
      else odd.push(result[j]);
    }

    result = odd.concat(even);

    odd = [];
    even = [];

    i++;
  }

  return result.join('');
}

function decrypt(text, n) {
  if (!text || n < 1) return text;

  console.log({encrypted: text})

  let i = 0
  let j

  while (i < n) {
    // identify string halfs
    const numOfOddIndexes = Math.floor(text.length / 2)
    const firstHalf = text.slice(0, numOfOddIndexes )
    const secondHalf = text.slice(numOfOddIndexes)

    text = ''

    for (j = 0; j < firstHalf.length; j++) {
      text += secondHalf[j]
      text += firstHalf[j]
    }

    text += secondHalf.slice(j)

    i++

    console.log({ decrypted: text })
  }
  return text
}

decrypt(encrypt('This is a test!', 2), 2)
