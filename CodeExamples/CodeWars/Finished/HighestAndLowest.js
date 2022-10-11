//@ https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
//@ 7

function highAndLow(numbers) {
  // split the string on spaces
  const numArray = numbers.split(" ");

  // sort the array (here we do least to greatest)
  numArray.sort((a, b) => a - b);

  // return the greatest and lowest numbers in the array
  // since the array is sorted G - L, length - 1 is the greatest, and [0] is the lowest
  return `${numArray[numArray.length - 1]} ${numArray[0]}`;
}

//
