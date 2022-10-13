//@ https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
//@ 6

function duplicateEncode(word) {
  // declare an empty string to add characters to
  let returnString = "";

  // cast the string to all lowercase, then split the string on each character, forming an array to iterate over
  const wordArray = word.toLowerCase().split("");

  // iterate over the word array
  for (let i = 0; i < wordArray.length; i++) {
    // define the current character for convenience
    const thisChar = wordArray[i];
    // filter the array down to characters that match the current character
    const countArray = wordArray.filter((char) => {
      return char === thisChar;
    });
    // calculate the length of the characters that match the current character
    // a length of 1 means the character appears only once and will be encoded as "("
    // a length of not 1 means the character appears more than once and will be encoded as ")"
    const countArrayLength = countArray.length;

    // check if the current character is a repeated character
    if (countArrayLength === 1) {
      returnString = returnString + "(";
    } else {
      returnString = returnString + ")";
    }
  }

  // return the encoded string
  return returnString;
}

/**
 * cant use a histogram, because objects cannot be keyed by certain chars like ! @ or spaces
 * if i put each char into an array, then filter based on the current character, then i can get the length of the filtered
 * this length will either be 1 or not 1, which matches the cases for the characters i need to encode
 */
