//@ https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
  // declare an empty array within which to push the floors of the tower
  let towerArray = [];

  // define the strings to repeat for clarity
  const spaces = " ";
  const blocks = "*";

  // iterate for each floors of the tower
  for (let i = 0; i < nFloors; i++) {
    // build the tower here
    // space + repeated blocks + middle block + repeated blocks + repeated spaces
    let floor =
      spaces.repeat(nFloors - 1 - i) + blocks.repeat(i) + blocks + blocks.repeat(i) + spaces.repeat(nFloors - 1 - i);
    // push into the towerArray
    towerArray.push(floor);
  }
  console.log({ towerArray });
  return towerArray;
}

//nFloors = 3
// iterat = 0, 1, 2
// blocks = 0, 1, 2
// spaces = 2, 1, 0
