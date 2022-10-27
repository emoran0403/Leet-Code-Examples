//@ https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript
//@ 7

const xMarksTheSpot = (input) => {
  // handle edge cases with an empty array
  if (!input.length) {
    return [];
  }

  let haveFoundX = false;
  let xArray = [];
  // after finding an x, this will be true^^^
  for (let i = 0; i < input.length; i++) {
    // define outerarray for context
    let outerChar = input[i];
    for (let j = 0; j < outerChar.length; j++) {
      let innerChar = outerChar[j];

      if (innerChar === "x") {
        // push the coords of the x it finds
        // if there are multiple X's found, return an empty array
        if (haveFoundX) {
          return [];
        }
        xArray.push(i, j);
        haveFoundX = true;
      }
    }
  }

  return xArray;
};
