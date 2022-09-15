const arr = [
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [7, 8, 9, 0, 3],
  [3, 8, 5, 4, 2],
];
// 00,11,22,33,44 top left to bottom right

// 04, 13, 22, 31, 44 bottom left to bottom right

/**
 * Iterate through the array.
 * Sum the top left to bottom right diagonal via index, as it is increasing alongside the index.
 * Sum the top right to bottom left diagonal via index and length - 1- i as that decreases.
 * @param arr The array within which to calculate the diagonal difference.
 * @returns
 */
function diagonalDifference(arr) {
  //* starting at the top
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][arr.length - 1 - i];
    console.log({ left: [i, i], right: [i, arr.length - i] });
  }

  return Math.abs(leftToRight - rightToLeft);
}
