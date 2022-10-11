//@ https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
//@ 6

//! the mathematical approach will not work without BigInt
// function findNb(m) {
//   // sum of cubes of n natural numbers
//   // we want to see if m is such a sum
//   // iterate over infinity
//   let numToReturn = 0;
//   for (let n = 0; n < Infinity; n++) {
//     // calculate the sum of cubes up to this n
//     const sum = BigInt((Math.pow(n, 2) * Math.pow(n + 1, 2)) / 4);
//     if (sum === m) {
//       // if we have a match, set numToReturn to n and break the loop
//       numToReturn = n;
//       break;
//     }
//     if (sum > n) {
//       // if our sum is larger than n, set numToReturn to -1 and break the loop
//       numToReturn = -1;
//       break;
//     }
//   }
//   console.log(numToReturn);
//   return numToReturn;
// }

// findNb(4183059834009);

function findNb(m) {
  // define floors as the number of layers to the tower
  let floors = 1;
  // define blocks as the sum of the number of blocks needed to build the tower to the specified floor
  let blocks = 1;

  // while blocks is less than m, keep building more floors and counting the sum of blocks
  while (blocks < m) {
    floors++;
    blocks = blocks + Math.pow(floors, 3);
    // console.log({ floors, blocks });
  }
  // console.log({ floors, blocks });

  if (blocks === m) {
    return floors;
  } else {
    return -1;
  }
}

// 1 => 1
// 2 => 1 + 8 = 9
// 3 => 1 + 8 + 27 = 36

// console.log(findNb(4183059834009));
