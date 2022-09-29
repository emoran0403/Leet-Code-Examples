//@ https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  // declare an empty object to serve as the histogram
  let histogram = {};
  //@ histogram[A[i]] will assign the value of A[i] as a key in histogram

  // iterate over the array and create a histogram => the frequencies of each entry in the array
  for (let i = 0; i < A.length; i++) {
    if (histogram[A[i]]) {
      // if the entry exists, increase it by 1
      histogram[A[i]] += 1;
    } else {
      // if this is the first occurrence, set the frequency to 1
      histogram[A[i]] = 1;
    }
  }

  //   console.log({ histogram });

  // declare the value to return, setting it when we iterate over the histogram
  let valueToReturn;

  // iterate over the histogram
  for (const entry in histogram) {
    // of an entry occurred an odd number of times, set the entry as the value to return
    if (histogram[entry] % 2 === 1) {
      valueToReturn = Number(entry);
      break;
    }
  }

  return valueToReturn;
}

// return the key whose value is odd
