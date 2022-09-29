//@ https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  // split the string on spaces
  let lowestLength = Infinity;
  const stringArray = s.split(" ");

  // iterate over the string array
  stringArray.forEach((string) => {
    // if a new shortest string is found, set that length as the lowest length
    if (string.length <= lowestLength) {
      lowestLength = string.length;
    }
  });

  return lowestLength;
}
