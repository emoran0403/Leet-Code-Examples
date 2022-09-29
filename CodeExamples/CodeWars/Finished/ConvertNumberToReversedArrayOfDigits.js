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

  console.log(numArray);
  return numArray;
}

digitize(35231);

//!
//? why did i need to make a new array to hold the numbers?
//@ for each just calls some function on each element in the array, it doesn't manipulate the data
// a forEach calling Number(numString) | parseInt(numString) | +numString | ~~numString did not work :(
