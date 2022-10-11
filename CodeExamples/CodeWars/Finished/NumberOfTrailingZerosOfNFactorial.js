//@ https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
//@ 5

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
function zeros(n) {
  // define an empty array to hold the addends
  let arrayToSum = [];

  // define kMax as the floor of log base 5 of n, achieved here via change of base formula
  const kMax = Math.floor(Math.log10(n) / Math.log10(5));

  // iterate from 1 to kMax, pushing the floor of n divided by 5 to the k power
  for (let i = 1; i <= kMax; i++) {
    arrayToSum.push(Math.floor(n / Math.pow(5, i)));
  }

  // sum the addends in the array
  const sumToReturn = arrayToSum.reduce((a, b) => a + b, 0);

  // return the sum
  return sumToReturn;
}
