//@ https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
//@ 7

function removeSmallest(numbers) {
  // account for edge cases
  if (!numbers) {
    return [];
  }
  // get a copy of the original array since we cant mutate that
  let copyOfNumbers = [...numbers];

  // find the smallest number in the array
  const minimum = Math.min(...copyOfNumbers);

  // find the index of the first instance of the minimum
  const minIndex = copyOfNumbers.indexOf(minimum);

  // remove the first instance of the minimum
  copyOfNumbers.splice(minIndex, 1);

  return copyOfNumbers;
}
