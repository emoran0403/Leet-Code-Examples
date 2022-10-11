//@ https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//@ 7

function squareDigits(num) {
  // convert the number to a number string
  const numAsString = num.toString();

  let numArray = [];
  // iterate through the array, squaring each digit, and pushing it into numArray
  for (const digit of numAsString) {
    // coerce the number strings to numbers
    const squared = digit * digit;

    numArray.push(squared);
  }
  // concat each number string together with no separator
  const returnArray = numArray.join("");

  return returnArray * 1;
  //   return +returnArray
  //   return returnArray >> 0; // only good up to 32 bit integers
}

for (let i = 0; i < something; i++) {}

// ========================

let i = 0;

for (; ++i < 100; ) {
  console.log(i);
}
