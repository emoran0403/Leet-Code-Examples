/**
 * * Return the number of candles that share the tallest height
 *
 * Sort the array from greatest height to smallest height.
 * Create the tallCandles array with only the tallest candles via array.filter...
 * ...where each candle exactly equals the tallest candle, represented as sortedCandles[0].
 * The length of tallCandles represents the number of candles that share the tallest height.
 * @param candles An array of positive integers representing candle heights in units.
 * @returns
 */
function birthdayCakeCandles(candles) {
  const sortedCandles = candles.sort((a, b) => b - a);
  const tallCandles = sortedCandles.filter((candle) => candle === sortedCandles[0]);
  const count = tallCandles.length;
  return count;
}
