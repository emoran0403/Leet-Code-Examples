/**
 * Use array.reverse() to reverse the array.
 *
 * @param a number[]
 * @returns a reversed
 */
function reverseArray(a) {
  a.reverse();
  return a;
}

/**
 * Iterate through the given array beginning with the end of the array, pushing each element into a new array.
 * @param a number[]
 * @returns a new array containing the elements of array a reversed
 */
function reverseArray2(a) {
  // [a, b, c] => [c, b, a]
  let b = [];
  let arrayEnd = a.length - 1;
  for (let i = arrayEnd; i >= 0; i--) {
    b.push(a[i]);
  }
  return b;
}
