//@ https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
//@ 8

function twoSort(s) {
  // sort the array
  const sorted = s.sort();

  // find the first element
  const myString = sorted[0];

  // define a string to push values to
  let returnString = "";
  // define the length for convenience
  const length = myString.length;

  // iterate over the length
  for (let i = 0; i < length; i++) {
    // define this char for convenience
    const thisChar = myString.charAt(i);

    // if we are on any letter but the first,
    if (i) {
      // push each character and "***" into the string
      returnString = returnString + "***" + thisChar;
    } else {
      // otherwise we are on the first character
      returnString = returnString + thisChar;
    }
  }

  // return the string
  return returnString;
}
