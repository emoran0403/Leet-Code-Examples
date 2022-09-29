// remove every element from a that matches any element in b
function arrayDiff(a, b) {
  // a.filter returns a new array containing elements that return true for the given condition (this will be our return array)
  // b.includes(elemA) is checking if elemA is among its elements and will return true if it is
  // we want the opposite of this to happen, since filter returns true results
  let returnArray = a.filter((elemA) => !b.includes(elemA));

  return returnArray;
}
