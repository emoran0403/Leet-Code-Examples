//@ https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
//@ 6

function order(words) {
  // handle the edge case where the input string is empty
  if (!words) {
    return "";
  }

  // split the string into an array based on spaces
  const wordsArr = words.split(" ");
  // define the length for convenience
  const length = wordsArr.length;

  // declare an array with a number of empty strings equal to the amount of words
  let fillArray = Array.from("w".repeat(length));
  //   console.log({ wordsArr, length, fillArray });
  // iterate over the words array
  for (let i = 0; i < length; i++) {
    // define the current word for convenience
    const thisWord = wordsArr[i];
    // define the length for convenience
    const thisWordLength = thisWord.length;

    // iterate over each charater in the string
    for (let j = 0; j < thisWordLength; j++) {
      // define this character for convenience
      const thisChar = thisWord[j];
      // define the uppercase and lowercase of the character
      const upper = thisChar.toUpperCase();
      const lower = thisChar.toLowerCase();
      //   console.log({ thisWord, thisChar, upper, lower, fillArray });
      /**
       * letters will have differing uppercase and lowercase letters, while numbers will not
       * thus if the uppercase and lowercase matches then we know we have a number
       * we can insert thisWord into the array at thisChar - 1, since the numbers start at 1, yet array indices start at 0
       * we replace the empty string with "thisWord"
       */
      if (upper === lower) {
        fillArray.splice(Number(thisChar) - 1, 1, thisWord);
        // break here, since we found the number, and dont need to continue to the end of the current word
        break;
      }
    }
  }

  // join the fill array with space
  const returnStr = fillArray.join(" ");
  return returnStr;
}

// order("is2 Thi1s T4est 3a");
// order("4of Fo1r pe6ople g3ood th5e the2");
