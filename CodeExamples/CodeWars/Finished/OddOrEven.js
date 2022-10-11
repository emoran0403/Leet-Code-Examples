//@ https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
//@ 7

function oddOrEven(array) {
  // sum the elements of the array

  const sum = array.reduce((a, b) => a + b, 0);
  // determine if it is odd or not
  if (sum % 2 === 0) {
    // return the result
    return "even";
  } else {
    return "odd";
  }
}
