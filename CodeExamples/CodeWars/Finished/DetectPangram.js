//@ https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
//@ 6

function isPangram(string) {
  // there are 26 letters in the alphabet, if we can reduce string to the number of unique letters,
  // then we can determine if it contains the alphabet at least once.

  // define regex that matches only letters
  const regex = /[a-zA-Z]/g;

  // force the characters to lowercase because we are only checking the presence of a letter, not the casing
  const lowerString = string.toLowerCase(); //* the given string, but with all lowercase letters

  // split each character off into an array
  const lowerArray = lowerString.split(""); //* an array containing each character from lowerString as a value in the array

  // create a set from the array made by splitting at each character in the given string
  // this ensures we don't have repeated characters, however it will include punctuation
  const lowerSet = new Set(lowerArray); //* a set containing only unique characters sources from lowerArray

  // spread each value from the set into an array to make use of array methods
  const setArray = [...lowerSet.values()]; //* an array containing the values from the set

  // join each character from the array together as a string without any separators
  const setString = setArray.join(""); //* the characters from setArray joined together without any separators

  // string.match(regex) returns an array of characters from the string that matches the given regex
  // we are checking for letters from an array of non-repeated characters
  const matches = setString.match(regex);

  // now the matches array will only contain a letter once if it was in the original string
  // if there are 26 letters, we have a pangram
  //   console.log({ lowerString, lowerArray, lowerSet, setArray, setString, matches });
  if (matches && matches.length === 26) {
    // console.log("true");
    return true;
    // otherwise we do not have a pangram
  } else {
    // console.log("false");
    return false;
  }
}

// isPangram("The quick brown fox jumps over the lazy dog.");
