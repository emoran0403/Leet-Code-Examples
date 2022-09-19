function getTotalX(a, b) {
  // generate an array of possible integers that satisfy the conditions with which to filter down based on the conditions
  let possibilities = [];
  a.sort((a, b) => b - a);
  b.sort((a, b) => a - b);

  for (let p = a[0]; p <= b[0]; p++) {
    possibilities.push(p);
  }

  const validFactors = possibilities.filter((possibility) => {
    // outer loop checks if possibility is a valid factor of b
    if (a.every((factor) => possibility % factor === 0) && b.every((mult) => mult % possibility === 0)) {
      //
      return true;
    }
  });

  //   console.log(validFactors);
  return validFactors.length;
}
// final [4, 8, 16]
// b = multiples
// a = factors
getTotalX([3, 4], [24, 48]);
