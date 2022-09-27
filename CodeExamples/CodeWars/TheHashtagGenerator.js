//@ https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  // split the string on spaces to create an array of words
  let wordArr = str.split(" ");
  // make a new array...
  let wordArrCaps = wordArr.map((word) => {
    // ...with the first letter of each word capitalized
    //? when i dont use a 1 line return, i must specify what will be returned
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // join the words together with no separators - this removes white space around words
  let wordString = wordArrCaps.join("");

  // if there are no characters, reject the hashtag
  if (!wordString) {
    return false;
  }

  // insert the hash for the tag if one does not already exist
  if (wordString[0] != "#") {
    wordString = "#" + wordString;
  }

  // check the length of the hashtag
  if (wordString.length > 140) {
    // if it is too large, reject it
    return false;
  } else {
    // if it an acceptable length, return it
    return wordString;
  }
}
