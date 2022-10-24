//@ https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
//@ 7

var number = function (array) {
  //* map over the array, returning a new array
  // provide the string and index to the function called on each element
  const returnArray = array.map((str, i) => {
    // change each string to now include the index+1 as a count of the sentences
    return `${i + 1}: ${str}`;
  });

  return returnArray;
};
