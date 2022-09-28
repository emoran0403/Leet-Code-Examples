//@ https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x) {
  // split the string on spaces
  const noSpaceArray = x.split(" ");

  // join the entries from the array without separators
  const noSpaceString = noSpaceArray.join("");

  // return the result
  return noSpaceString;
}
