//@ https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

// 0.0.20.0
// 255.255.255.255
// each `slot` is worth 2^8 before overflowing

function ipsBetween(start, end) {
  // find the difference between the start and end points
  // multiple each difference by 255 ^ placevalue
  // sum the products and return the solution

  // split the string input based on periods, and cast them to numbers
  let startAsArray = start.split(".").map((num) => Number(num));
  let endAsArray = end.split(".").map((num) => Number(num));

  // declare an array to push the differences into
  let diffArray = [];

  // iterate through the array, calculating the difference between the start and end points, then raising the difference to the
  // power based on its place in the address
  for (let i = 0; i <= startAsArray.length - 1; i++) {
    let difference = (endAsArray[i] - startAsArray[i]) * Math.pow(256, 3 - i);

    // push the differences into the difference array
    diffArray.push(difference);
  }

  // define the final difference as the sum on each differences
  let difference = diffArray.reduce((a, b) => a + b, 0);

  // console.log({ startAsArray, endAsArray, diffArray, difference });
  return difference;
}

// ipsBetween("10.0.0.0", "10.0.0.50");

// ipsBetween("150.0.0.0", "150.0.0.1");
// ipsBetween("10.0.0.0", "10.0.0.50");
// ipsBetween("20.0.0.10", "20.0.1.0");
// ipsBetween("10.11.12.13", "10.11.13.0");
// ipsBetween("160.0.0.0", "160.0.1.0");
