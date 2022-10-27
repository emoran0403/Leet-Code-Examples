//@ https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
//@ 8

const areaOrPerimeter = function (l, w) {
  // If it is a square, return its area. If it is a rectangle, return its perimeter.
  // the area of a square is the product of its length and width, (or L^2 or W^2)
  // the perimeter of a rectangle is the sum of twice its length and width
  return l === w ? l * w : 2 * l + 2 * w;
};
