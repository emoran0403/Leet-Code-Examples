//@ https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
//@ 5

function dirReduc(arr) {
  // since we need to recheck the placement of sequential direction pairs after removing a pair, it might be a good candidate for recursion
  // iterate over the array
  // if i and i+1 are a pair to remove, then remove them, calling the recursive function again with the array

  // account for edge cases where there aren't enough directions to form a pair
  if (arr.length <= 1) {
    return arr;
  }

  // define an object to hold the pairs of directions that should be removed
  const PAIRS = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  // recursive function to iterate over the array, removing pairs of directions
  const pairRemover = (inputArr) => {
    // if the last iteration removed all directions from the array, return the empty array
    if (inputArr.length === 0) {
      return inputArr;
    }

    // iterate over the array
    for (let i = 0; i < inputArr.length; i++) {
      // define the current and next directions for convenience
      const current = inputArr[i];
      // if current is the last element in the array, next will be undefined, which is fine with the IF logic next
      const next = inputArr[i + 1];
      // console.log({ current, next });
      // if the current direction and the next direction are a pair to remove
      if (PAIRS[current] === next) {
        // console.log({ msg: "before", inputArr });

        // then remove the pair
        inputArr.splice(i, 2);
        // and call the recursive function again with the array
        // console.log({ msg: "calling again", inputArr });
        return pairRemover(inputArr);
      }

      if (!next) {
        // if there are no pairs to remove, then return the array
        return inputArr;
      }
    }
  };

  // call the recursive function, and return the result
  const returnArray = pairRemover(arr);
  // console.log({ returnArray });
  return returnArray;
}

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
