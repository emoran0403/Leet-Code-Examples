function sillyGame(n) {
  // Write your code here
  // define a function to mimic sieve of eratosthenes to get the number of unique primes < n
  // make sure to ignore 1, since 1 is not prime
  // based on the number of unique primes, we can declare alice or bob a winner

  //* create an array containing the numbers 1-n
  // define the array
  let numberArray = [];
  // fill the array
  for (let i = 0; i <= n; i++) {
    numberArray.push(i);
  }

  //* create an array containing only primes < n
  // define the array
  let primes = [];

  // define a recursive function to add primes to the array, mimicing Sieve of Eratosthenes
  const Sieve = (numArray) => {
    //
  };
}

// odd (1) - alice cannot move = bob wins
// even (1), 2 - alice removes 2, bob cannot move = alice wins
// odd (1), 2, 3 - alice removes 2, bob removes, 3, alice cannot move = bob wins
// even (1), 2, 3, 5 - alice removes 2, bob removes, 3, alice removes 5, bob cannot move = alice wins
// ==> bob wins when there are an even number of primes < n
// ==> alice wins when there are an odd number of primes < n
