//@ https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
//@ 8

function removeEveryOther(arr) {
  // define a temp array to push the kept elements
  let returnArr = [];

  // iterate over the array, incrementing by 2 each time to achieve the effect of hitting every other element
  for (let i = 0; i < arr.length; i = i + 2) {
    returnArr.push(arr[i]);
  }

  return returnArr;
}
