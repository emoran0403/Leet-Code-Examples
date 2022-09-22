//@ https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  // declare the low and high numbers
  let low, high;

  // define the low and high numbers
  if (a === b) {
    // returning early with a if they are equal
    return a;
  } else if (a > 1 && b > 1) {
    // if a & b are positive, then we can quickly calculate the sum of an arithmetic sequence
    // n = number of terms to be added
    const n = Math.abs(a - b) + 1;
    return n * ((a + b) / 2);
    // if the above conditions are not met, then we can fill an array and reduce it
  } else if (a < b) {
    low = a;
    high = b;
  } else {
    low = b;
    high = a;
  }

  // define an array within which to push each number between and including the low and high numbers
  let numberArray = [];

  // iterate over the range, pushing each number
  for (let i = low; i <= high; i++) {
    numberArray.push(i);
  }

  // calculate the sum of the numbers in the number array
  const sum = numberArray.reduce((a, b) => a + b, 0);

  // return the sum
  // console.log(sum);
  return sum;
}

getSum(0, 5);
