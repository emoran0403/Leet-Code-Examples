//@ https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
//@ 6

function persistence(num) {
  if (num <= 9) {
    return 0;
  }
  // declare a variable to track the iteration count for the persistence
  let persistenceCount = 1;

  // define a recursive function to multiply each number in the array
  const recursive = (number) => {
    // convert the numbert to a string
    const numString = number.toString();
    // split the string on each character, giving an array of number strings
    const numArray = numString.split("");
    // reduce the function by multiplying each number
    const product = numArray.reduce((a, b) => a * b, 1);

    // if the pruduct is greater than 9, increment the persistence count and call the recursive function again
    if (product > 9) {
      persistenceCount++;
      recursive(product);
    }
  };

  recursive(num);

  return persistenceCount;
}

// persistence(100);
