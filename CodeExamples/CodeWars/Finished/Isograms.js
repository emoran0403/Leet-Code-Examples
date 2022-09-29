//@ https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  // handle edge cases
  if (!str) {
    // if the string is empty, return true
    return true;
  }

  // cast the string to lowercase
  const lowercased = str.toLowerCase();

  // split each character in the string
  const strAsArray = lowercased.split("");

  // delcare an empty object to server as the histogram
  let histogram = {};

  // iterate over the array and create a histogram
  for (let i = 0; i < strAsArray.length; i++) {
    if (histogram[strAsArray[i]]) {
      histogram[strAsArray[i]] += 1;
    } else {
      histogram[strAsArray[i]] = 1;
    }
  }

  // create an array of the frequencys via Object.values(histogram)
  // then call array.every to test if every frequency is exactly 1
  // if each frequency is exactly 1, then we have an isogram
  const result = Object.values(histogram).every((frequency) => frequency === 1);
  return result;
}

//* create a set from the string after it has been cast to the same case, then check if the set size matches the original strings length

function isIsogram(str) {
  // return new Set(str.toUpperCase()).size == str.length;

  let strAsSet = new Set(str.toLowerCase());
  return strAsSet.size == str.length;
}
