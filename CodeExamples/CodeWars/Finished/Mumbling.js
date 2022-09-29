function accum(s) {
  // split the string into single character entries in an array
  const splitSentence = s.split("");
  //   console.log(splitSentence);

  // declare an array to hold the characters
  let charArray = [];

  // iterate through the array, repeating the character i times
  for (let i = 0; i < splitSentence.length; i++) {
    // capitalize the first character
    const firstCharUpper = splitSentence[i].toUpperCase();

    // repeat the character i times
    let repeatedCharString = splitSentence[i].toLowerCase().repeat(i);

    // join the capitalized first character with the repeat characters
    let finalCharString = firstCharUpper + repeatedCharString;
    // console.log(finalCharString);

    // push the repeated character string onto the array
    charArray.push(finalCharString);
  }
  // return the string with the repeated characters separated by dashes
  const finalReturn = charArray.join("-");

  //   console.log(finalReturn);
  return finalReturn;
}

// accum("pizza");
