//@ https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript

// const board = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ];

/**
 * board[row][column]
 * to test the numbers horizontally, keep row constant, iterate through columns
 * to test the numbers vertically, keep column constant, iterate through rows
 *
 * regions:
 * top left - [0-2][0-2]
 * top middle - [0-2][3-5]
 * top right - [0-2][6-8]
 *
 * middle left - [3-5][0-2]
 * middle middle - [3-5][3-5]
 * middle right - [3-5][6-8]
 *
 * bottom left - [6-8][0-2]
 * bottom middle - [6-8][3-5]
 * bottom right - [6-8][6-8]
 *
 * to check if the numbers in a row, column, or region are all there, we can define a sorted array of the numbers 1-9
 * we can then sort the area in question, and see if each value matches the corresponding value in the sorted array
 */

// If the board is valid return 'Finished!', otherwise return 'Try again!'
function doneOrNot(board) {
  const valsToCheckAgainst = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // * check the rows
  // iterate through each row
  for (let i = 0; i < board.length - 1; i++) {
    // define a row
    let row = board[i];

    // sort the row
    let sortedRow = row.sort((a, b) => a - b);

    if (JSON.stringify(valsToCheckAgainst) != JSON.stringify(sortedRow)) {
      // if the sorted row does not match the values to check against, then the board is not complete
      return "Try again!";
    }
  }

  //* check the columns
  // iterate through each column
  // board[row][column]
  // board[r][c]
  for (let r = 0; r < board.length - 1; r++) {
    // define an array to push the values from each column into
    let column = [];
    for (let c = 0; c < board.length - 1; c++) {
      column.push(board[r][c]);
    }

    // sort the solumn
    let sortedColumn = column.sort((a, b) => a - b);

    if (JSON.stringify(valsToCheckAgainst) != JSON.stringify(sortedColumn)) {
      // if the sorted column does not match the values to check against, then the board is not complete
      return "Try again!";
    }
  }

  //* check the regions
  // define the lengths of the regions for convenience
  const low = [0, 1, 2];
  const mid = [3, 4, 5];
  const high = [6, 7, 8];

  // define and check each of the 9 regions
  for (let i = 1; i <= 9; i++) {}

  board[0][0];
  board[0][1];
  board[0][2];

  board[1][0];
  board[1][1];
  board[1][2];

  board[2][0];
  board[2][1];
  board[2][2];
}
