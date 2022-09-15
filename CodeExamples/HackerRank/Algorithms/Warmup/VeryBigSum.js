/**
 *
 * @param ar An array of numbers to be summed, which may exceed Number.MAX_SAFE_INTEGER
 * @returns The sum of the numbers in the given array.
 */
function aVeryBigSum(ar) {
  const sum = ar.reduce((a, b) => BigInt(a) + BigInt(b));
  return sum;
}
