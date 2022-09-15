function findPoint(px, py, qx, qy) {
  // define the x and y coordinates of point r
  let rx, ry;

  // determine the x and y distance point r is from point q
  let x_dist = Math.abs(px - qx);
  let y_dist = Math.abs(py - qy);

  // determine rx
  if (qx > px) {
    rx = qx + x_dist;
  } else {
    rx = qx - x_dist;
  }

  // determine ry
  if (qy > py) {
    ry = qy + y_dist;
  } else {
    ry = qy - y_dist;
  }

  return [rx, ry];
}

/**
 * Find The Point deals with finding the missing endpoint, given the midpoint and the other endpoint.
 *
 * x_dist: The distance along the x-axis between the midpoint and the given endpoint - this will be the distance from the midpoint to the other endpoint
 * y_dist: The distance along the y-axis between the midpoint and the given endpoint - this will be the distance from the midpoint to the other endpoint
 *
 * Once we have the x and y distances, we next need to determine if we need to add or subtract those values to the midpoint.
 *
 * When the midpoint value is greater than the given endpoint value, the other endpoint lies above or to the right of the midpoint.
 * Likewise, when the midpoint value is smaller than the given endpoint value, the other endpoint lies below or to the left of the midpoint.
 *
 * Finally, return the coordinates as an array
 */
