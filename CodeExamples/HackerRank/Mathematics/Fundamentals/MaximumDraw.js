function maximumDraws(n) {
  return n + 1;
}

/**
 * To find the maximum number of socks pulled from the drawer, we assume the worst case scenario, where we draw unique socks each time.
 * Once we reach the number of unique socks, our next draw must be a match.
 */
