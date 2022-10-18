//@ https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
//@ 6

function duplicateCount(text) {
  // cast the input string to lowercase
  const input = text.toLowerCase();

  // define a histogram object to count the number of duplicates
  let histogram = {};

  // split the input on each character
  const charArray = input.split("");

  // iterate over the character array, updating the character counts of the histogram
  charArray.forEach((char) => {
    if (histogram[char]) {
      histogram[char]++;
    } else {
      histogram[char] = 1;
    }
  });

  // create an array of the values from histogram - these are the counts of the characters
  const counts = Object.values(histogram);

  // filter the counts array down to those counts that are greater than 1 - these are the duplicates
  const filtered = counts.filter((count) => count > 1);

  // the length of the filtered array will be equal to the number of duplicates in the original string
  const duplicates = filtered.length;

  return duplicates;
}
