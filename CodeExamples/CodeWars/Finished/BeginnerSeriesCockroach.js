//@ https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
//@ 8

function cockroachSpeed(s) {
  const CONVERSION_FACTOR = 100000 / 3600;

  return Math.floor(s * CONVERSION_FACTOR);
}
