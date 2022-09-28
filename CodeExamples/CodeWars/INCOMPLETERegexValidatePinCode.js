//@ https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// function validatePIN(pin) {
//   //! broke on a negative decimal
//   // define regex that matches numbers
//   const regex = new RegExp(/^\d+$/);

//   // define the result of the potential pin matching the regex
//   const result = regex.test(pin);

//   // check the result, and the length of the pin
//   if ((result && pin.length === 4) || pin.length === 6) {
//     return true;
//   } else {
//     return false;
//   }
// }

function validatePIN(pin) {
  //! this is lame without regex support
  // must have valid length, not be negative, and be an integer
  // check pin lengths && positive && not a decimal
  const bad1 = pin.split("-");
  const bad2 = pin.split(".");
  const bad3 = pin.split("\n");

  //   const sign = pin >= 0;
  //   const integer = Math.round(pin) === Number(pin);
  //   console.log({ pin, bad1, bad2, length: pin.length, sign, integer });

  // fail on input with decimals or negative numbers
  if (bad1.length != 1 || bad2.length != 1 || bad3.length != 1) {
    return false;
  }
  if ((pin.length === 4 || pin.length === 6) && pin >= 0 && Math.round(pin) === Number(pin)) {
    return true;
  } else {
    return false;
  }
}

// validatePIN("-43120");
