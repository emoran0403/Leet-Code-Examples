//@ https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
//@ 7

function filter_list(l) {
  // declare an array to return, which will have only numbers pushed into it
  let returnArray = [];
  // iterate over the array, checking the type of data for each element
  l.forEach((element) => {
    // if it is a number type, keep it, if not, then discard it
    if (typeof element === "number") {
      returnArray.push(element);
    }
  });
  return returnArray;
}
