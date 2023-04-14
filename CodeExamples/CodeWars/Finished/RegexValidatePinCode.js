//@ https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
//@ 7

function validatePIN(pin) {
  const num = pin.toString();
  const reg1 = new RegExp("^[0-9]{6}$");
  const reg2 = new RegExp("^[0-9]{4}$");
  if (num.match(reg1) || num.match(reg2)) return true;
  return false;
}
