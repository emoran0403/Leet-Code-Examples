//@ https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
//@ 7

function openOrSenior(data) {
  // data is a tuple array, where each tuple is [age, handicap]
  // seniors have age >= 55 && handicap > 7
  // return an array containing "Open" or "Senior" for each tuple

  // define a return array
  let returnArray = [];

  // iterate over the data, destructuring age and handicap off each tuple for convenience
  data.forEach(([age, handicap]) => {
    // if the tuple passes conditions qualifying that person as a senrior, push "Senior" into the return array
    if (age >= 55 && handicap > 7) {
      returnArray.push("Senior");
    } else {
      // otherwise, push "Open" into the return array
      returnArray.push("Open");
    }
  });

  return returnArray;
}
