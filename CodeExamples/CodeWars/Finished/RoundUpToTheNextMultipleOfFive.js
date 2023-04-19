//@ https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
//@ 7

function roundToNext5(n) {
  if (n % 5 === 0) return n;

  const remainder = Math.abs(n % 5);
  const pdiff = 5 - remainder;
  const ndiff = remainder;

  if (n > 0) {
    return pdiff + n;
  } else {
    return ndiff + n;
  }
}
