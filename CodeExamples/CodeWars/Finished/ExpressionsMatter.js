//@ https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
//@ 8

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a + b * c, a * b + c, (a + b) * c, a * (b + c), a + b * c, a * b + c);
}
