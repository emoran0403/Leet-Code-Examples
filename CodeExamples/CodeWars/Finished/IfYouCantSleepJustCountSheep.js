//@ https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
//@ 8

var countSheep = function (num) {
  let stringArray = [];

  for (let i = 1; i <= num; i++) {
    let add = `${i} sheep...`;
    console.log(add);
    stringArray.push(add);
  }
  const returnString = stringArray.join("");
  console.log({ returnString });
  return returnString;
};

// countSheep(1);
