//@ https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
//@ 6

function findUniq(arr) {
  // construct a set from the given input, this will contain only the 2 different elements of the set
  const myset = new Set(arr);
  // spread this set out into an array to easily access the elements
  const setarr = [...myset];

  //* now we figure which one appears more than once in the array

  // filter the array down to only those elements that exactly match the first element in the set
  const filteredbya = arr.filter((elem) => elem === setarr[0]);

  // if there are multiple matches, return the other element
  if (filteredbya.length > 1) {
    return setarr[1];
  } else {
    // otherwise, return the first element
    return setarr[0];
  }
}

//* another approach would be to find the element whose first index matches the last index
