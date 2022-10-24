//@ https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
//@ 8

function positiveSum(arr) {
  // return 0 for edge case where arr is an empty array
  if (!arr) {
    return 0;
  }
  // filter arr down to only positive values
  const positiveArray = arr.filter((num) => num >= 1);
  // return 0 if there were no positive values
  if (!positiveArray) {
    return 0;
  }
  const sum = positiveArray.reduce((a, b) => a + b, 0);
  return sum;
}
