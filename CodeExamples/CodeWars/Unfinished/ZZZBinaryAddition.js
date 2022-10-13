//@ https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
//@ 7

function addBinary(a, b) {
  // parse int with base 2 does not work on numbers larger than 1 lol
  const a_Binary = parseInt(a, 2) ? parseInt(a, 2) : 0;
  const b_Binary = parseInt(b, 2) ? parseInt(b, 2) : 0;
  const sum = a_Binary + b_Binary;
  console.log({ a_Binary, b_Binary, sum });
  return `${sum}`;
}

addBinary(1, 2);
