//@ https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
//@ 6

function high(x) {
  // define the alphabet
  const alphabet = "1abcdefghijklmnopqrstuvwxyz";
  // each letter's index can be used to determine the score - (1 was added to the beginning to prevent off-by-one errors later)
  const alphaArray = alphabet.split("");
  // split the input string on spaces to make an array of words
  const wordArray = x.split(" ");
  // declare an array to hold scores for each word
  let scoreArray = [];

  // iterate over the word array to calculate a score for each word
  wordArray.forEach((word) => {
    // define the length of the word for convenience
    const length = word.length;

    // define the score for each word
    let score = 0;

    // iterate over each character in word, updating score
    for (let i = 0; i < length; i++) {
      score += alphaArray.indexOf(word[i]);
    }

    // push the score to the array
    scoreArray.push(score);
  });

  // find the highest score
  const highScore = Math.max(...scoreArray);

  // find the index of the highest score
  const highScoreIndex = scoreArray.indexOf(highScore);

  // find the word whose index is the same as the highest score
  const returnString = wordArray[highScoreIndex];

  return returnString;
}
