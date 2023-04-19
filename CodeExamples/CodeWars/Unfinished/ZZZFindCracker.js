//@ https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript
//@ 6

function findHack(arr) {
  const MAX_SCORE = 200;
  const arrDupe = [...arr];
  let cheaters = [];
  const VALUES = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };

  for (let i = arrDupe.length - 1; i >= 0; i--) {
    const record = arrDupe[i];
    const gradeArr = record[2];

    //* remove cheaters who have a score higher than the max score
    if (record[1] > MAX_SCORE) {
      cheaters.push(arrDupe.splice(i, 1)[0][0]);
      continue;
    }
    //* test if the scores add up properly to the given score
    // tally the scores
    let scoreSum = gradeArr.reduce((score, grade) => VALUES[grade] + score, 0);

    // add the bonus for all A or B scores
    if (gradeArr.length >= 5 && !gradeArr.includes("C") && !gradeArr.includes("C")) {
      scoreSum += 20;
    }
    if (scoreSum !== record[1]) {
      // console.log("scores", scores);
      cheaters.push(arrDupe.splice(i, 1)[0][0]);
    }
  }

  //   console.log("cheaters");
  //   console.log(cheaters);
  //   console.log("arrDupe");
  //   console.log(arrDupe);

  return cheaters.reverse();
}

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
//   ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
//   ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
// ];

// findHack(array);
