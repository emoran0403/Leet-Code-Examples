//@ https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function (arr) {
  // iterate over the array n=array.length times
  // iterate again and make sub arrays starting at array[i]
  // find the sum of each sub array
  // compare and save the highest
  // after finishing the outer iteration, compare the highest sub arrays,
  // return the largest sub array

  // declare a variable to hold the final array
  let arrayToReturn = [];

  // declare a variable to hold the largest subarrays after each outer iteration
  let arrayOfArrays = [];

  // outer array gives the start index, inner array gives the end index
  for (let i = 0; i <= arr.length; i++) {
    // declare an array to push subarrays into
    let arrayToTrimDown = [];
    // iterage again, making sub arrays
    for (let j = 0; j <= arr.length; j++) {
      const subarray = arr.slice(i, j);
      // push the subarray into another array
      arrayToTrimDown.push(subarray);
    }

    // with subarrays now in arrayToTrimDown, sum them, and find the largest, then push that into arrayOfArrays
  }
};

// [1, 2, 3] = 6
// [1] | [2] | [3]
// [1, 2] | [2, 3]
// [1, 2, 3]

// [1, 2, 3, 4] = 10
// [1] | [2] | [3] | [4]
// [1, 2] | [2, 3] | [3,4]
// [1, 2, 3] | [2, 3, 4]
// [1, 2, 3, 4]

// [1, 2, 3, 4, 5] = 15

// [1]                 | [2]              | [3]           | [4]         | [5]
// [1, 2]              | [2, 3]           | [3, 4]        | [4, 5]
// [1, 2, 3]           | [2, 3, 4]        | [3, 4, 5]
// [1, 2, 3, 4]        | [2, 3, 4, 5]
// [1, 2, 3, 4, 5]
