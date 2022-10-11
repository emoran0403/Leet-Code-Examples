//@ https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//@ 7

function getMiddle(s) {
  // define half the string length ==> this is where the middle of the string will be
  const halfStringLength = Math.floor(s.length / 2);

  // define the middle character from the left and right
  const charFromLeft = s[halfStringLength];
  const charFromRight = s[s.length - halfStringLength - 1];

  // if the word's length is even, then we expect 2 middle characters
  if (s.length % 2 === 0) {
    // return charFromRight first as this is the first middle character
    return charFromRight + charFromLeft;
  } else {
    // otherwise, the word length is odd and we expect 1 middle character
    return charFromRight;
  }
}

// getMiddle("mouse");
// getMiddle("cows");
// getMiddle("middle");

// mouse = 5
// Math.floor(5/2) = 2
// from left ==> string at index 2 = 'u'
// from right ==> string at index (length-2) = 'u'

// cows = 4
// Math.floor(4/2) = 2
// from left ==> string at index 2 = 'w'
// from right ==> string at index (length-2) = 'o'
