/**
 * * Print the ratios of positive, negative, and zeros to the total count of numbers in the array.
 *
 * Define the total count of numbers in the array via array.length.
 * Declare positive, negative, and zeros, setting their values to zero.
 * Iterate through the array, incrementing positive, negative, and zeros as appropriate.
 * Calculate each ratio, calling Number.toFixed(6) - 6 was the specified precision.
 *
 * @param arr An array of integers.
 */
function plusMinus(arr) {
  const total = arr.length;
  let positive = 0;
  let negative = 0;
  let zeros = 0;

  arr.forEach((number) => {
    if (number > 0) {
      positive++;
    } else if (number < 0) {
      negative++;
    } else {
      zeros++;
    }
  });
  const positiveRatio = (positive / total).toFixed(6);
  const negativeRatio = (negative / total).toFixed(6);
  const zerosRatio = (zeros / total).toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zerosRatio);
}
