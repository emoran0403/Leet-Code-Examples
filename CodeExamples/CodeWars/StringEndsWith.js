//@ https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending) {
  // grab the last characters of str
  let newStr = str.slice(-ending.length);

  // compare the strings, accounting for the edge case where ending is an empty string
  if (newStr === ending || !ending) {
    return true;
  } else {
    return false;
  }
}

// get the tail end of the first string, using the length of the second string
// then compare the result
// ----------------------------------------------------------------
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

function solution(str, ending) {
  // compare the strings, accounting for the edge case where ending is an empty string
  if (str.endsWith(ending) || !ending) {
    return true;
  } else {
    return false;
  }
}
