function validParentheses(parens) {
  if (!parens) return true;

  const OPEN = '(';
  const CLOSE = ')';

  let depth = 0;
  const order = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === OPEN) {
      depth++;
      order.push(depth);
    }

    if (parens[i] === CLOSE) {
      // handle case where parens is closed immediately
      if (i === 0) return false;

      // if (depth === 0) depth = 1;

      order.push(-depth);
      depth--;

      // handle case where next parens is closed after depths being closed
      if (depth === 0 && parens[i + 1] === CLOSE) return false;
    }
  }

  console.log({ order });
  const depthSum = order.reduce((total, item) => (total += item), 0);
  console.log({ depthSum });
  return depthSum === 0 ? true : false;
}

console.log(validParentheses('('));
