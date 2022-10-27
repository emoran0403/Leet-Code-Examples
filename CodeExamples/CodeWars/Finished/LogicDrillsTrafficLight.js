//@ https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
//@ 8

function updateLight(current) {
  const CONSTANT = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };

  return CONSTANT[current];
}
