function disemvowel(str) {
  // define a list of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // define an empty array to push non-vowel characters into
  let strAsArray = [];
  // if the character is not a vowel, push it into strAsArray
  for (const character of str) {
    if (!vowels.includes(character.toLowerCase())) {
      strAsArray.push(character);
    }
  }

  // join the characters together
  const returnArray = strAsArray.join("");

  return returnArray;
}
