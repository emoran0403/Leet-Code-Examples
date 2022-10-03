//@ https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

function findNb(m) {
  // sum of cubes of n natural numbers
  // we want to see if m is such a sum
  // iterate over infinity
  let numToReturn = 0;
  for (let n = 0; n < Infinity; n++) {
    // calculate the sum of cubes up to this n
    const sum = (Math.pow(n, 2) * Math.pow(n + 1, 2)) / 4;
    if (sum === m) {
      // if we have a match, set numToReturn to n and break the loop
      numToReturn = n;
      break;
    }
    if (sum > n) {
      // if our sum is larger than n, set numToReturn to -1 and break the loop
      numToReturn = -1;
      break;
    }
  }

  return numToReturn;
}
