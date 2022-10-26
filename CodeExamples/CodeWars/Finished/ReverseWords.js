//@ https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
//@ 7

function reverseWords(str) {
  // split the string on spaces to create an array of words
  const stringArr = str.split(" ");
  // define the length for convenience
  const length = stringArr.length;
  // declare a temporary to push the reversed words into
  let pushArray = [];

  // iterate over the word array, reversing the words, and pushing them into pushArray
  for (let i = 0; i < length; i++) {
    // define this word for convenience
    const thisWord = stringArr[i];

    // create an array of the characters of thisWord, reverse them, then join them together as a single string
    const reversed = [...thisWord].reverse().join("");
    // push them into pushArray
    pushArray.push(reversed);
  }
  // join the words together on spaces
  const returnString = pushArray.join(" ");

  return returnString;
}
