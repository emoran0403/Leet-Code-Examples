//@ https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

// 0.0.0.0
// 255.255.255.255
//! this approach will not work :/
// (x * 255 ^ 3).(x * 255 ^ 2).(x * 255 ^ 1).(x * 255 ^ 0)

function ipsBetween(start, end) {
  // find the difference between the start and end points
  // multiple each difference by 255 ^ placevalue
  // sum the products and return the solution

  // split the string input based on periods
  let startAsArray = start.split(".");
  let endAsArray = end.split(".");

  // declare an array within which to push the differences
  let differenceArray = [];

  for (let i = 0; i <= startAsArray.length - 1; i++) {
    const difference = end[i] - start[i];
    const sites = difference * Math.pow(255, 3 - i);
    differenceArray.push(sites);
  }
}
