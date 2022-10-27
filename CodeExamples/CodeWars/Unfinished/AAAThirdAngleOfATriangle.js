//@ https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
//@ 8

function otherAngle(a, b) {
  // the sum of the interior angles of a triangle is 180
  // adding the 2 given angles, then subtracting that sum from 180 gives the remaining angle
  return 180 - (a + b);
}
