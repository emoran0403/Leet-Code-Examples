//@ https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
//@ 7

function getCount(str) {
  // define vowels
  let vowels = ["a", "e", "i", "o", "u"];
  // initialize count at 0
  let count = 0;

  // iterate thrugh the given str, and for each string, if the vowels array includes the character, increment count
  for (const character of str) {
    if (vowels.includes(character)) {
      count++;
    }
  }

  //   finally, return count
  return count;
}
