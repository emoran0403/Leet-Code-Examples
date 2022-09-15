/**
 * Call .reduce(), passing in a, b, and returning a + b to sum the values of the array.
 * @param ar The array to be summed.
 * @returns The sum of the elements of the array.
 */
function simpleArraySum(ar) {
  const initialValue = 0;
  const sum = ar.reduce((a, b) => a + b, initialValue);
  return sum;
}
/**
 * initialValue is optional - if supplied, function will add that to the first value in the array on the first call
 * if it is not supplied, function will add the first two values in the array on the first call
 */

function simpleArraySum(ar) {
  const sum = ar.reduce((a, b) => a + b);
  return sum;
}
