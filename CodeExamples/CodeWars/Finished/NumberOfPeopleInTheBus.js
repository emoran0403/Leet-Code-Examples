//@ https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
//@ 7

var number = function (busStops) {
  // declare the number of current riders as 0, since the bus starts out as empty
  let currentRiders = 0;

  // iterate over the array, and for each stop...
  busStops.forEach(([on, off], stop) => {
    // define the net change in the number of riders
    const change = on - off;
    // apply the change to the number of current riders
    currentRiders = currentRiders + change;
  });

  return currentRiders;
};

// number([
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ]);
