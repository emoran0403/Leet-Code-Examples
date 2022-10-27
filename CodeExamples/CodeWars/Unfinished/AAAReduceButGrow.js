//@ https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
//@ 8

function grow(x) {
  // call array.reduce, passing in a and b to signify the this and the next element
  // return the product of a * b, with an initial value of 1 since the operation is multiplication
  return x.reduce((a, b) => a * b, 1);
}
