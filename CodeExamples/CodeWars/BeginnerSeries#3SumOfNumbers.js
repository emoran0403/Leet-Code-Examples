//@ https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  // declare the low and high numbers
  let low, high;

  // define the low and high numbers, returning early with a if they are equal
  if (a === b) {
    return a;
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
  for (let i = a; i <= b; i++) {
    numberArray.push(i);
  }

  // calculate the sum of the numbers in the number array
  const sum = numberArray.reduce((a, b) => a + b, 0);

  // return the sum
  console.log(sum);
  //   return sum;
}

getSum(0, 5);

function getSum2(a, b) {
  // sum of an arithmetic sequence
}
