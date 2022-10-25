//@ https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
//@ 8

function fakeBin(x) {
  const numarry = x.split("");
  let wow = [];
  for (let i = 0; i < numarry.length; i++) {
    const thisnum = numarry[i];
    if (thisnum <= 4) {
      wow.push("0");
    } else {
      wow.push("1");
    }
  }
  const returnthis = wow.join("");
  return returnthis;
}
