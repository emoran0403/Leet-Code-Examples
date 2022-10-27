//@ https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
//@ 8

function firstNonConsecutive(arr) {
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // define this and next num for convenience
    let thisNum = arr[i];
    let nextNum = arr[i + 1];
    // if the next num is undefined, then we've reached the end of the array, and all numbers are consecutive
    if (nextNum === undefined) {
      return null;
    }
    // if this num + 1 is not equal to the next num, then next num is not consecutive
    if (thisNum + 1 !== nextNum) {
      return nextNum;
    }
  }
}
