//@ https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
//@ 6

function tribonacci(signature, n) {
  // account for edge cases in the test
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [signature[0]];
  }

  // define the sequence as starting with the signature
  let sequence = [...signature];
  //   console.log({ sequence });
  // to generate more terms in the sequence, we must add the last 3 terms
  // our sequence will grow, and our references to it will need to be dynamic to account for this

  // array[array.length - 1] is the last term
  // array[array.length - 2] is the second to last term
  // array[array.length - 3] is the third to last term

  // iterate n-3 times (to account for the 3 terms given as signature), pushing the sum into sequence after each iteration
  const iterations = n - 3;
  for (let i = 1; i <= iterations; i++) {
    // calculate the next term by summing the previous 3 terms
    let sum = sequence[sequence.length - 1] + sequence[sequence.length - 2] + sequence[sequence.length - 3];

    // push the new term into the sequence
    // console.log({ sum, sequence });
    sequence.push(sum);
  }

  //   console.log({ wow: "final", sequence });
  return sequence;
}

// tribonacci([1, 1, 1], 10);
