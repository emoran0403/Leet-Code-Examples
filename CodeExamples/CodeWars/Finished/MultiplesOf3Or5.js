//@ https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
//@ 6

function solution(number) {
  // define an array to place the unique multiples of 3 and 5
  let multiples = [];

  // fill the array with multiples of 3 and 5
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  //   console.log(multiples);
  //sum all the multiples
  const sum = multiples.reduce((a, b) => a + b, 0);

  return sum >= 0 ? sum : 0;
}

// solution(10);
