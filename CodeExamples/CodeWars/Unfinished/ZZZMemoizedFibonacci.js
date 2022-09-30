//@ https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

// An = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
//  n = 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11
// add 1 to the index to achieve n starting at 1

// find the nth term of the fibonacci sequence
//@ via memoization
function fibonacci(n) {
  let memo = [0, 1, 1];
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// find the nth term of the fibonacci sequence
//@ via explicit formula for fibonacci sequence
//! inaccurate for large values of n due to the way JS handles numbers
function fibonacci(n) {
  const golden = 1 + Math.sqrt(5);
  const goldenconj = 1 - Math.sqrt(5);
  const denom = Math.pow(2, n) * Math.sqrt(5);

  const result = (Math.pow(golden, n) - Math.pow(goldenconj, n)) / denom;
  return Math.floor(result);
}
