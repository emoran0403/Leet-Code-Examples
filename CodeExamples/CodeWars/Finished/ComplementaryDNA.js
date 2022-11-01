//@ https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
//@ 7

function DNAStrand(dna) {
  // define a an object to hold the complementary base pairs
  const COMPLEMENTS = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  // split on each character to get an array of bases
  const dnaArray = dna.split("");

  // map over the bases, returning the complement
  const compArray = dnaArray.map((base) => {
    return COMPLEMENTS[base];
  });

  // join the bases together as a string with no separators
  return compArray.join("");
}
