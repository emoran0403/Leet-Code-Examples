//@ https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript

function parseInt(string) {
  const digitsbad = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
  };
  const teensbad = {
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  };
  const tensbad = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  const hundredsbad = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };
}
//! do some math based on the words in the string
// need to remove any dashes and replace them with spaces
// need to remove instances of the word and

// "two hundred forty-six" => 246
// "(two * hundred) + forty + six" => 246

// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// "seven hundred eighty three thousand nine hundred nineteen" => 783919
// "((seven * hundred) + eighty + three) * thousand + (nine * hundred) + nineteen" => 783919

// if hundred is encountered, grab the previous number and multiply by 100

//! new approach
// dont strip out hundred and thousand lol
// digits = 0-9
// multiples of 10 = the 10s place number
// teens = 2 numbers

// with tens, hundreds, and thousands, we need some context to determine which case we have below:
//@ tens
//? ten
//* ten should always just be 10
// can add a number or a zero at the end
//? fifty / forty
//* if just a ten, add 1 zero at the end
//? thirty one / seventy two
//* if a digit follows a ten, no zero is necessary

//@ hundreds:
// can add 1 zero between digits
//? one hundred and one / two hundred three
//* if hundred is between 2 words, we need a zero between those numbers
// can add 2 trailing zeros
//? five hundred / nine hundred
//* if hundred is the last word, we need 2 zeros at the end
//? one hundred ten
//* assume ten as a digit, and place 10

//@ thousands:
// can add 1 zero between digits
//? four thousand twelve / two thousand fifty five
//* if thousand is is between a teen, or 2 numbers, we need to add 1 zero between
// can add 2 zeros between digits
//? one thousand one / two thousand five
//* if thousand is between a single digit on either side, we need to add 2 zeros between
// can add 3 trailing zeros
//? one thousand / seven thousands
//* if thousand is the last word, we need 3 zeros at the end
const digits = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};
const teens = {
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};
const tens = {
  twenty: 2,
  thirty: 3,
  forty: 4,
  fifty: 5,
  sixty: 6,
  seventy: 7,
  eighty: 8,
  ninety: 9,
};
const million = {
  million: 1000000,
};
