//@ https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
//@ 8

function sumMix(x) {
  // placing a + before a number string coerces it to a number type
  return x.reduce((a, b) => +a + +b, 0);
}

function sumMix(x) {
  // however, this is more readable
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}
