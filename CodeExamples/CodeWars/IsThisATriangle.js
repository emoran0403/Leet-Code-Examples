function isTriangle(a, b, c) {
  // the sum of each pair of length of a possible triangle must be greater than the third side

  // to account for edge cases, no side may be negative or equal to 0
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  // all must return true for the figure to be a triangle
  const lengthAB = a + b > c;
  const lengthBC = b + c > a;
  const lengthCA = c + a > b;

  if (lengthAB && lengthBC && lengthCA) {
    return true;
  } else {
    return false;
  }
}
