//@ https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
//@ 7

function SeriesSum(n) {
  // handle edge cases
  if (n === 1) {
    return `1.00`;
  }
  if (n === 0) {
    return `0.00`;
  }
  //* generate each term 1-n, pushing them into an array
  let series = [];
  for (let i = 1; i <= n; i++) {
    // calculate the term...
    const term = 1 / (3 * i - 2);
    // ... and push the term into the series array
    series.push(term);
    // console.log({ series });
  }

  // sum each term
  const value = series.reduce((a, b) => a + b, 0);
  const rounded = Math.round(value * 100) / 100;
  //   console.log({ value });

  // return the rounded result as a decimal with 2 decimal places
  // Number.toFixed(x) ensures there are x digits to the right of the decimal, adding zeros as needed
  return `${rounded.toFixed(2)}`;
}

// SeriesSum(4);
