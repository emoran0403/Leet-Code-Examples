/**
 * Declare a return array.
 * Iterate through queries via .forEach()
 * For each of the query strings, call .filter() on stringList, returning where the query string matched the string.
 * Get the length of the filtered array, which descrribes the number of times the query string was found.
 * Push this into the return array.
 *
 * @param stringList An array of input strings.
 * @param queries An array of query strings.
 * @returns A number [] representing the number of instances where a string in stringList matches the given query string.
 */
function matchingStrings(stringList, queries) {
  let returnArr = [];
  queries.forEach((queryString) => {
    const wow = stringList.filter((string) => string === queryString).length;
    returnArr.push(wow);
  });

  return returnArr;
}
