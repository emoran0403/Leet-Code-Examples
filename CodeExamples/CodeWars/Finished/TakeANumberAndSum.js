//@ https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
//@ 6

function sumDigPow(a, b) {
  // declare an empty array to hold the values between the given start and end points
  let range = [];

  // declare an array to push the numbers into which fulfill the property
  let returnArray = [];

  // iterate over the range a-b, filling those values into the array
  for (let i = a; i <= b; i++) {
    range.push(i);
  }
  //   console.log(range);

  // iterate over the range, and push passing values into the return array
  range.forEach((number) => {
    // convert the number to a string so we can get context of the digits
    const strNum = String(number);
    // define the length of strNum to iterate over next
    const numLength = strNum.length;
    // define a sum, which will hold the sum of the digits to consecutive powers
    let sum = 0;

    // iterate over the length of strNum so that we can calculate the sum
    for (let j = 0; j < numLength; j++) {
      // define the base and power for convenience
      const base = strNum[j];
      const power = j + 1;

      // add the digit raised to the consecutive power to the previous sum
      sum += Math.pow(base, power);
    }

    // if the sum of the digits raised to consecutive powers is equal to the number, push the number into the return array
    if (sum === number) {
      returnArray.push(number);
    }
  });
  //   console.log(returnArray);
  return returnArray;
}

// sumDigPow(1, 100);
