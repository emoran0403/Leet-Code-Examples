//@ https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

// 0.0.20.0
// 255.255.255.255
// each `slot` is worth 2^8 before overflowing

function ipsBetween(start, end) {
  // find the difference between the start and end points
  // multiple each difference by 255 ^ placevalue
  // sum the products and return the solution

  // split the string input based on periods
  let startAsArray = start.split(".").map((num) => (Number(num) + 1) * 255);
  const reducedStart = startAsArray.reduce((a, b) => a * b, 1);

  let endAsArray = end.split(".").map((num) => (Number(num) + 1) * 255);
  const reducedEnd = endAsArray.reduce((a, b) => a * b, 1);

  let difference = reducedEnd - reducedStart;
  let difover255 = difference / 255;
  console.log({ startAsArray, reducedStart, endAsArray, reducedEnd, difference, difover255 });
}

ipsBetween("10.0.0.0", "10.0.0.50");
