/**
 * ! pretty sure this is correct, but website disagrees
 * * if the grade is within 2 points of the next multiple of 5, round up to that multiple.
 * * if the grade will remain under 40, do not round
 * @param grades An integer array of grades to be rounded if certain conditions are met.
 * @returns
 */
function gradingStudents(grades) {
  // Write your code here
  let roundedGrades = [];

  grades.forEach((grade) => {
    // do not round any grades that are <= 37, or if they miss the cut off for rounding up to the next multiple of 5
    if (grade <= 37 || (grade + 3) % 5 === 0 || (grade + 4) % 5 === 0 || grade % 5 === 0) {
      roundedGrades.push(grade);
    } else {
      // round the grades up to the next multiple of 5 if they are 1...
      if ((grade + 1) % 5 === 0) {
        roundedGrades.push(grade + 1);
        //... or two points away
      } else if ((grade + 2) % 5 === 0) {
        roundedGrades.push(grade + 2);
      } else {
        console.log({ grade });
      }
    }
  });

  //   console.log({ grades, roundedGrades });

  return roundedGrades;
}

gradingStudents([35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
