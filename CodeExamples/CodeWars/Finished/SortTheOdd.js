//@ https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  // declare an array to push the odd numbers into
  let oddArray = [];

  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    // if the element is odd...
    if (array[i] % 2 != 0) {
      // push that element into the array of odd numbers
      oddArray.push(array[i]);
      // place an identifier we can look for later at that index
      array[i] = "A";
    }
  }

  // sort the array of odd numbers
  //   console.log({ array, oddArray });
  oddArray.sort((a, b) => a - b);
  //   console.log({ array, oddArray });

  // iterate over the original array, replacing each identifier with the lowest odd number from the odd number array
  for (let i = 0; i < array.length; i++) {
    // if the element is our identifier
    if (array[i] === "A") {
      // remove the lowest odd number from the array (array.shift removes the element for us, rather than just identifying it)
      const oddToInsert = oddArray.shift();
      // set the element into the array
      array[i] = oddToInsert;
    }
  }
  console.log({ array });
  return array;
}

/**
 * iterate over the given array
 * replace odd numbers with an identifier, pushing those odd numbers into another array
 * sort the array of odd numbers
 * iterate over the first array, removing odd numbers from the odd number array and swapping them for the identifier
 */
// sortArray([5, 8, 6, 3, 4]);
// [5, 8, 6, 3, 4]
// [A, 8, 6, A, 4] && [5, 3]
// [A, 8, 6, A, 4] && [3, 5]
// [3, 8, 6, 5, 4]
