/**
 * Remove the first element from the array via .shift()
 * Add that element to the end of a temporary array via .push()
 * Repeat until netRotations is reached
 * Return an array containing the remaining elements of the original array in front of the elements from the temp array
 * @param d The number of left rotations to perform. (A rotation is defined as decreasing each items index by 1, and moving the first item to the end of the array)
 * @param arr The array to perform the rotation on.
 */
function rotateLeft(d, arr) {
  /**
   * netRotations describes the unique rotations based on the array length
   * netRotations = array length - 1
   * [a,b]
   * [a,b] - [b,a]
   * (0 - 1) / (2 - 3)
   *
   * [a, b, c]
   * [a, b, c] - [b, c, a] - [c, a, b]
   * (0 - 1 - 2) / (3 - 4 - 5)
   *
   * [a, b, c, d]
   * [a, b, c, d] - [b, c, d, a] - [c, d, a, b] - [d, a, b, c]
   * (0 - 1 - 2 - 3) / (4 - 5 - 6 - 7)
   *
   * I can use this to reduce maximum number of rotations to array.length - 1
   */
  const netRotations = d % arr.length;

  if (netRotations === 0) {
    return arr;
  } else {
    let tempArr = [];

    for (let i = 0; i < netRotations; i++) {
      tempArr.push(arr.shift());
    }
    let returnArr = [...arr, ...tempArr];
    return returnArr;
  }
}
