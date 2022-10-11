//@ https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
//@ 7

const binaryArrayToNumber = (arr) => {
  // join all elements of the array with no separators to create a binarystring
  const binaryString = arr.join("");
  // parseInt converts the numberString to a number based on the given radix (or base)
  const integerToReturn = parseInt(binaryString, 2);
  // return the number
  return integerToReturn;
};
