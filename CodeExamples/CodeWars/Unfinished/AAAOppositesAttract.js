//@ https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//@ 8

function lovefunc(flower1, flower2) {
  // divide each flower by 2 and keep the remainder
  // remainder of 0 means there were an even number of petals
  // remainder of 1 means there were an odd number of petals
  const oneParity = flower1 % 2;
  const twoParity = flower2 % 2;
  // return the comparison of the two paritys
  return oneParity !== twoParity;
}
