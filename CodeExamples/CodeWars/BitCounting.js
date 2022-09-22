var countBits = function (n) {
  // converts a number to a string with the provided base
  const numString = n.toString(2);

  // create a new array with the numbers from the string
  const numArray = numString.split("");

  // sum each element of the array
  const finalNum = numArray.reduce((a, b) => Number(a) + Number(b), 0);

  // return the sum
  return finalNum;
};
