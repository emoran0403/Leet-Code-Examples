//@ https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
//@ 7

function printerError(s) {
  // define the character code for m
  const CharCode_M = 109;

  // define errorCount as 0, which will be incremented as errors are counted
  let errorCount = 0;

  // create an array with each character of the string
  const charArray = s.split("");

  // iterate over the array, testing if each character code is greater than 109
  charArray.forEach((char) => {
    // if so, then increment the errorCount
    if (char.charCodeAt(0) > CharCode_M) {
      errorCount++;
    }
  });

  // return an unsimplified fraction representing the errors out of total characters
  return `${errorCount}/${s.length}`;
}
