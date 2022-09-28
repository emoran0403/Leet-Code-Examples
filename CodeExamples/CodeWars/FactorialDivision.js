//@ https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31/train/javascript

// - n and d will be positive BigInts, and also n > d. No need to check any of that
function factorialDivision(n, d) {
  if (d > n) {
    return BigInt(1);
  }
  // find the difference between n and d
  const diff = BigInt(n - d);

  // define a variable to hold the product for the loop
  let product = BigInt(n);

  // iterate over the difference, and for each iteration, multiple the product by the iteration
  for (let i = BigInt(1); i < diff; i++) {
    product = BigInt(product * (n - i));
  }
  return product;
}

// since the numerator will always be greater than the denominator, we can find the difference between them, and resolve that as a factorial
// n=5, d=3 => 5! / 3! => 5*4*3*2*1 / 3*2*1 => both have 3! in common => 5*4*3! / 3! => anything divided by itself is 1
// => 5*4*1 / 1 => 5*4 = 20
// this reduces the problem to finding the difference between n and d, then calculating that difference's factorial
