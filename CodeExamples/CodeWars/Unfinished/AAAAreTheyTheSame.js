//@ https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
//@ 6

// {} [] gotta bang the property
// !!!! ""  0 false null undefined NaN

function comp(array1, array2) {
  //* handle edge cases - an array is empty, the arrays are actually arrays, and array lengths do not match
  if (!array1 || !array2 || !Array.isArray(array1) || !Array.isArray(array2) || array1.length != array2.length) {
    console.log(!array1);
    return false;
  }

  //* sort the arrays
  // so we can iterate over the length once, allowing us to reference the elements in the same position via the iterator
  // this works becasue given two numbers, one will be larger than the other, and the same will be true for their respective squares

  const sorted_1 = array1.sort((a, b) => a - b);
  const sorted_2 = array2.sort((a, b) => a - b);

  //* determine which array has the roots and which has the squares
  // compare the first elements of each array, and reassign to a 'roots' and 'squares' array for convenience
  let roots,
    powers = [];
  if (Math.pow(sorted_1[0], 2) == sorted_2[0]) {
    // if the first element to the second power from sorted_1 equals the first element of sorted_2, then 1 is roots and 2 is powers
    roots = sorted_1;
    powers = sorted_2;
  } else {
    // otherwise, then 2 is roots and 1 is powers
    powers = sorted_1;
    roots = sorted_2;
  }

  //* iterate over the length of the arrays
  // we can use either length, because at this point, we know the array length are equal

  for (let i = 0; i < array1.length; i++) {
    // at each iteration, check if the root squared equals the square
    if (Math.pow(roots[i], 2) != powers[i]) {
      // if it does not, then return false
      //   console.log("returning false not all matching");

      return false;
    }
  }
  // if the loop has not broken then all roots match squares, and we can return true
  //   console.log("returning true all matching");
  return true;
}
let a1 = [];
let a2 = [];
comp(a1, a2);
