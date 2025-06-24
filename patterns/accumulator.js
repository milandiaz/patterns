/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n != "number") {
    return NaN;
  }
  if (n < 0) {
    return undefined;
  }
  if (n == 0) {
    return 1;
  }
  let prod = 1;
  for (let i = 0; i <= n; i++) {
    prod = prod * i;
  }
  return prod;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  if (typeof n != "number") {
    return null;
  }
  if (n <= 0) {
    return [];
  }
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(i);
  }
  return array;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  let longestString = "";

  for (let string of strings) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  }
  return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  let studentsPresent = 0;

  for (let present in attendance) {
    if (present == `true`) {
      studentsPresent++;
    }
  }
  return studentsPresent;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if (typeof dna != "string") {
    return null;
  }
  let complementary = "";

  for (let symbol of dna) {
    if (symbol == "A") {
      complementary += "T";
    } else if (symbol == "T") {
      complementary += "A";
    } else if (symbol == "C") {
      complementary += "G";
    } else if (symbol == "G") {
      complementary += "C";
    }
  }
  return complementary;
}
