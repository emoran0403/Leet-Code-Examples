//@ https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  // set all characters to lowercase
  const lowerCase = str.toLowerCase();

  // define an object to serve as a histogram, counting the frequency of each character
  const histogram = {};
  // set each character into an array
  const strArray = lowerCase.split("");

  // iterate over the array, filling out the histogram
  strArray.forEach((char) => {
    // if the character exists, increment the frequency
    if (histogram[char]) {
      histogram[char]++;
    } else {
      // else, set the frequency to 1
      histogram[char] = 1;
    }
  });
  //   console.log({ histogram });
  // if the count of 'o' matches the count of 'x', return true
  if (histogram.o === histogram.x) {
    // console.log("true");
    return true;
  } else {
    // else return false
    // console.log("false");

    return false;
  }
}

// XO("xo");
// XO("xxOo");
// XO("xxxm");
// XO("Oo");
// XO("ooom");
