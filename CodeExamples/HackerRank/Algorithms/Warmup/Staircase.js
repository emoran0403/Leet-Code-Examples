// n=4
// "---#"
// "--##"
// "-###"
// "####"
/**
 *
 * Iterate n times, logging a string containing n-i spaces, and i pounds
 * @param n A positive integer representing the height of the staircase
 */
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i) + " ".repeat(n - i));
  }
}
