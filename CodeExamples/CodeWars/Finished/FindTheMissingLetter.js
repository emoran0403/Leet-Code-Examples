//@  https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
  // declare the missing letter, define it later
  let missingLetter;
  // console.log(array);
  // iterate over the array to get scope of each character
  for (let i = 0; i <= array.length; i++) {
    // console.log({
    //   char1: array[i],
    //   character1: array[i][0],
    //   charcode1: array[i].charCodeAt(0),
    //   charcode2: array[i + 1].charCodeAt(0) + 1,
    // });
    // if the charcode at the index != the charcode at the next index plus 1, there was a letter skipped
    if (array[i].charCodeAt(0) + 1 != array[i + 1].charCodeAt(0)) {
      // if so, define the missing letter as the charcode of the first character plus 1
      missingLetter = String.fromCharCode(array[i].charCodeAt(0) + 1);
      // break out from the loop if the letter has been found, as there will only be 1
      break;
    }
  }

  // console.log(`missing letter: ${missingLetter}`);
  return missingLetter;
}

// findMissingLetter(["a", "b", "c", "d", "f"]);
