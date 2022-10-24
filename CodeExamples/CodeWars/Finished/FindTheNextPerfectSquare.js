//@ https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
//@ 7

function findNextSquare(sq) {
  // determine if the given input is a perfect square
  // take the square root, and if it is an integer, continue
  const root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    // otherwise, the input was not a perfect square, so return -1
    return -1;
  }
}
