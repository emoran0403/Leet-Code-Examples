//@ https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
//@ 8

function correct(string) {
  // split the string on each character
  const array = string.split("");
  let newarr = [];

  // iterate over the array, replacing each number for the correct character
  for (let i = 0; i < array.length; i++) {
    // define char for convenience
    let char = array[i];
    // console.log(char);
    // console.log(typeof char);
    // if char is a number, replace it with the correct character
    if (char === "1") {
      newarr.push("I");
      //   console.log(char);
      //! replacing a space with a O
    } else if (char === "0") {
      newarr.push("O");
      //   console.log(char);
    } else if (char === "5") {
      newarr.push("S");
      //   console.log(char);
    } else {
      newarr.push(char);
    }
  }

  //   console.log(newarr);
  const thereturn = newarr.join("");
  //   console.log(thereturn);
  return thereturn;
}

// correct("L0ND0N L0ND0N");
