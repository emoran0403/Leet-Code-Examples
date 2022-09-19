function kangaroo(x1, v1, x2, v2) {
  let result = "NO";

  // x2 is always > x1, so if they travel at the same speed, they will never meet up
  // if v1 < v2, they will never meet up, as v1 will never catch up to v2
  if (v1 <= v2) {
    return result;
  }

  let location1 = x1;
  let location2 = x2;

  // iterate a number of times (this could be improved with some number theory)
  for (let i = 0; i < 100000; i++) {
    // update the locations
    location1 = location1 + v1;
    location2 = location2 + v2;

    // if the locations match, update result and break the loop
    if (location1 === location2) {
      result = "YES";
      break;
    }
    // 1 is always trying to catch up to 2.  if 1 passes 2, they will never meet up, therere break the loop
    if (location1 > location2) {
      break;
    }
  }
  return result;
}

function kangaroo(x1, v1, x2, v2) {
  return Number.isInteger((x2 - x1) / (v1 - v2)) ? "YES" : "NO";
}

const z = (x1, v1, x2, v2) => ((x2 - x1) / (v2 - v1) === 0 ? "YES" : "NO");
