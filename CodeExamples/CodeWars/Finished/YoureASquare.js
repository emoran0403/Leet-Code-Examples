//@ https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
//@ 7

var isSquare = function (n) {
  // handle edge cases where the number is 0 or negative as they cannot be perfect squares
  if (n < 0) return false;

  // get the square root of the number
  const root = Math.sqrt(n);

  const rootOverOne = root % 1;

  if (!rootOverOne) {
    return true;
  } else {
    return false;
  }
};

// or in a small ternary
var isSquare = function (n) {
  return Math.sqrt(n) % 1 || n < 0 ? false : true;
};
