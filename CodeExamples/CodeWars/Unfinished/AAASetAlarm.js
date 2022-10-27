//@ https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
//@ 8

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  }
  return false;
}
