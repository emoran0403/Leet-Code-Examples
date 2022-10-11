//@ https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
//@ 6

function bouncingBall(h, bounce, window) {
  // evaluate for edge cases where the mother is above the son, and if the ball would bounce infinitely
  let height = h;
  if (bounce >= 1 || bounce <= 0 || window >= height) {
    return -1;
  }
  // kid starts at h
  // mom starts at window
  // define bounceCount as 1 to account for the initial drop
  let bounceCount = 1;
  // account for the initial drop
  height *= bounce;

  // check for additional bounces
  // while the bounce height is greater than the window height, calculate what the next height will be, and increment the bounce count by 2
  while (height > window) {
    // calculate the new height reached after the bounce
    height *= bounce;
    // increment the bounce count
    bounceCount += 2;
  }
  return bounceCount;
}

// for (let i = 0; i < Infinity; i++) {}
