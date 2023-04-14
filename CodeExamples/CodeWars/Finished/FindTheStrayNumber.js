//@ https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
//@ 7

function stray(numbers) {
  // const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  //   const set = new Set(numbers);
  //   const arr = [...set];

  // should work if array only contains positive integers && the stray is less than the sum of the other numbers
  /**
   * 5x + 1y
   * subtract y, then find the remainder of the sum
   * 5x % x = 0
   * thus, y is the stray
   * subtract x, then find the remainder of the sum
   * 4x + 1y % y !=0
   * thus y is the stray
   */
  //   if ((sum - arr[0]) % arr[1] === 0) return arr[0];
  //   return arr[1];

  const set = new Set(numbers);
  const [first, second] = [...set];

  let firstCount = 0;
  let secondCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === first) {
      firstCount++;
    } else {
      secondCount++;
    }
  }

  if (firstCount > secondCount) return second;
  return first;
}
