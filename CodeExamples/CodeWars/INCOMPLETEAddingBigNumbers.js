//@ https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
  let wow = a;
  let wow2 = b;
  const bigA = BigInt(wow);
  const bigB = BigInt(wow2);
  const sum = BigInt(bigA + bigB);
  const sumAsString = sum.toString();
  return sumAsString;
}

// big int is not supported, thus we have to re-create the summation algorithm
