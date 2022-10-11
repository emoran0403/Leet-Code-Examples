//@ https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
//@ 6

/**
 * to end at the starting point, each n must match with an s, likewise, each e must match with a w
 * we must decide if there is a matching amount of n-s pairs, and e-w pairs.
 * we must handle edge cases where the walk array is not exactly 10
 */

function isValidWalk(walk) {
  // handle edge cases where the walk array is not exactly 10
  if (walk.length != 10) {
    // console.log("false");
    return false;
  }
  // iterate over the walk array and increment a counter to keep track of the directions
  // let count_n = 0;
  // let count_s = 0;
  // let count_w = 0;
  // let count_e = 0;

  // for (let i = 0; i < walk.length; i++) {
  //   switch (walk[i]) {
  //     case "n":
  //       count_n++;
  //       break;
  //     case "s":
  //       count_s++;
  //       break;
  //     case "e":
  //       count_e++;
  //       break;
  //     case "w":
  //       count_w++;
  //       break;
  //   }
  // }
  // iterate over the walk array and create a histogram object to keep track of the directions
  let directions = {};
  for (let i = 0; i < walk.length; i++) {
    // const thisdirection = walk[i];
    // console.log({ directions });
    // console.log(walk[i]);

    if (directions[walk[i]]) {
      directions[walk[i]]++;
    } else {
      directions[walk[i]] = 1;
    }
  }

  // console.log({ directions });

  // if (count_n === count_s && count_w === count_e) {
  // console.log("true");
  //   return true;
  // } else {
  // console.log("false");
  //   return false;
  // }

  if (directions.n === directions.s && directions.w === directions.e) {
    // console.log("true");
    return true;
  } else {
    // console.log("false");
    return false;
  }
}

// isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
// isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]);
