/**
 * * Find the number of primes within the given set
 * @param n Integer representing the largest number in the set {1, 2, 3, ..., n-1, n}
 * @returns A string declaring the winner
 * !! For large values of n, this will exceed the maximum call stack size.
 */
function sillyGame(n) {
  //* create an array containing the numbers 1-n
  // define, then fill the array
  if (n === 1) {
    console.log(`Bob`);
    return;
  }

  let numberArray = [];
  for (let i = 1; i <= n; i++) {
    numberArray.push(i);
  }

  //* create an array containing only primes < n
  let primes = [1];

  // define a recursive function to add primes to the array, mimicking Sieve of Eratosthenes
  let sievePass = 0;
  const Sieve = (numArray) => {
    sievePass++;

    // ensure the sieve ignores 1, since it is already included in primes array
    if (numArray[0] === 1) {
      numArray.shift();
    }
    //remove the first number, which will be a prime, and add it to the primes array
    let currentPrime = numArray[0];

    if (numArray[0]) {
      let currentPrime = numArray.shift();
      primes.push(currentPrime);
    }

    // apply the sieve action, keeping numbers that are not divisible by the currentPrime
    let sievedArray = numArray.filter((number) => number % currentPrime != 0);

    if (numArray.length) {
      Sieve(sievedArray);
    }
  };

  //* call the recursive function, which populates the primes array
  Sieve(numberArray);

  console.log(primes);

  //* declare the winner based on the number of primes in the array
  if (primes.length % 2 === 0) {
    //the length is even, thus alice wins
    console.log(`Alice`);
  } else {
    // the length is odd, thus bob wins
    console.log(`Bob`);
  }
}

// odd (1) - alice cannot move = bob wins
// even (1), 2 - alice removes 2, bob cannot move = alice wins
// odd (1), 2, 3 - alice removes 2, bob removes, 3, alice cannot move = bob wins
// even (1), 2, 3, 5 - alice removes 2, bob removes, 3, alice removes 5, bob cannot move = alice wins
// ==> bob wins when there are an even number of primes < n
// ==> alice wins when there are an odd number of primes < n

//@ try the regex for primes approach here
