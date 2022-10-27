//@ https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
//@ 8

function areYouPlayingBanjo(name) {
  // any names starting with either "R" or "r" play banjo
  // cast the first letter of the name to lowercase and match it against "r"
  return name[0].toLowerCase() === "r" ? name + " plays banjo" : name + " does not play banjo";
}
