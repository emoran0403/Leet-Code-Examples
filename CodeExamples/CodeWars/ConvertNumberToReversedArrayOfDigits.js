//@ https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  // produces an array of string numbers of the digits in the reverse order
  let numArray = n.toString().split("").reverse();

  // declare a new array to hold the numbers
  let newarr = [];
  numArray.forEach((numString) => {
    // for each number string, convert it to a number, and push it into the array
    newarr.push(Number(numString));
  });

  //   console.log(newarr);
  return numArray;
}

// digitize(35231);

//!
//? why did i need to make a new array to hold the numbers?
// a forEach calling Number(numString) | parseInt(numString) | +numString | ~~numString did not work :(
