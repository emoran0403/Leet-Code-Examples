//@ https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
//@ 4

function sumStrings(a, b) {
  // read the strings as integers, using BigInt to account for excessive
  let numA = BigInt(a);
  let numB = BigInt(b);

  // BigInt knows to assign empty strings a value of 0

  // sum the variables
  const numSum = numA + numB;

  // convert the numbers to strings
  const stringSum = numSum.toString();

  // return the solution
  return stringSum;
}
