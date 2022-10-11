//@ https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
//@ 5

function rot13(message) {
  const ALPHABET_LOWER = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const ALPHABET_UPPER = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // declare an array within which to push the ciphered characters
  let tempArray = [];
  // split the string into an array
  const messageAsArray = message.split("");

  // iterate over the length of the message
  messageAsArray.forEach((character) => {
    // check the casing of the character
    if (ALPHABET_LOWER.includes(character)) {
      // the character is a lowercase letter, so find the index of the character
      const indexOfChar = ALPHABET_LOWER.indexOf(character);
      // get the index of the character 13 characters after, accounting for wrapping around the alphabet
      const cipheredIndex = (indexOfChar + 13) % 26;
      // get the letter at this new index, and push it into a new array
      tempArray.push(ALPHABET_LOWER[cipheredIndex]);
      //so do stuff
      // the character has been ciphered, so return to move to the next character
      return;
    }
    if (ALPHABET_UPPER.includes(character)) {
      // the character is a uppercase letter, so find the index of the character
      const indexOfChar = ALPHABET_UPPER.indexOf(character);
      // get the index of the character 13 characters after, accounting for wrapping around the alphabet
      const cipheredIndex = (indexOfChar + 13) % 26;
      tempArray.push(ALPHABET_UPPER[cipheredIndex]);

      //so do stuff
      // the character has been ciphered, so return to move to the next character
      return;
    }
    // if the character was not caught above, it is a non-letter character, so just push it into the temp array
    tempArray.push(character);
  });

  // join the array with no separators
  const returnString = tempArray.join("");
  // return the string
  return returnString;
}
