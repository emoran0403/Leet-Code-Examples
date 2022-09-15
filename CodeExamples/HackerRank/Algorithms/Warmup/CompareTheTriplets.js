/**
 * Declare a scoreArray with the values [0,0], this will keep track of Alices's and Bob's relative scores, and will be returned.
 * Call .forEach() on Alice's scores, passing in the score, and the index.
 * If Alice's score is greater than Bob's corresponding score...
 * (which we can access with the index that was passed in)
 * ...increment Alice's score in the score Array.
 * Else, check if Alice's score is less than Bob's corresponding score, increment Bob's score in the score Array
 * The case where the scores are equal is handled by declaring scoreArray with values of [0,0]
 * @param a Array containing Alice's scores.
 * @param b Array containing Bob's scores.
 * @returns
 */
function compareTriplets(a, b) {
  let scoreArray = [0, 0];
  a.forEach((aliceScore, i) => {
    if (aliceScore > b[i]) {
      scoreArray[0]++;
    } else if (aliceScore < b[i]) {
      scoreArray[1]++;
    }
  });
  return scoreArray;
}
