//@ https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
//@ 8

function enough(cap, on, wait) {
  // if cap is greater than or equal to the sum of on and wait, we are under or at capacity, each are good outcomes
  // if the sum is greater than cap, we are over capacity, and return the difference, this is the bad outcome
  return cap >= on + wait ? 0 : on + wait - cap;
}
