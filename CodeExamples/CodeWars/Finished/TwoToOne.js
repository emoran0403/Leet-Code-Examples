//@ https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  // combine the letters from each array into an array, then make a set from that array
  // this does the job of filtering down to unique values from the union of both arrays
  const filteredSet = new Set([...s1, ...s2]);

  // create an array from the set
  const unsortedArray = Array.from(filteredSet);

  // sort the array
  const sortedArray = unsortedArray.sort();

  // join the characters together with no separators
  const returnString = sortedArray.join("");

  return returnString;
}
