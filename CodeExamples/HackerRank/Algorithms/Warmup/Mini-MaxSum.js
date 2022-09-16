/**
 * * Find the minimum and maximum values that can be made by using exactly 4 values from the given array.
 * Sort the array from least to greatest via array.sort(), passing in '(a, b) => a - b' as the sort function.
 * Calculate the sum of the overlapping elements in the middle of the array.
 * Calculate the minimum and maximum by adding the least and greatest elements to the overlap sum respectively.
 * @param arr an array of 5 intgers
 */
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const overlap = arr[1] + arr[2] + arr[3];
  const min = arr[0] + overlap;
  const max = arr[4] + overlap;
  console.log(`${min} ${max}`);
}
