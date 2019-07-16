// PROBLEM: I have a list of n + 1 numbers. Every number in the range 1..n appears once except for one number that appears twice.
// Write a function for finding the number that appears twice.

// APPROACH 1: for every number as we iterate through the array, set the number at the index corresponding the the number * -1.
// If after multiplying by -1, the number was positive, we know there must be a duplicate
// TIME: O(n)
// SPACE: O(1) constant

function findRepeat(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = Math.abs(numbers[i]);
    numbers[currentNum] *= -1;
    if (numbers[currentNum] > 0) {
      return currentNum;
    }
  }
  
  throw new Error('no repeat found')
}


// APPROACH 2: sum all the numbers from 1-n. because 1...n is a triangular series, can use the formula (n^2 + n)/2 to find the sum
// sum all the numbers in the array. subtract the inital 1-n sum from this to find the repeat number
// TIME: O(n)
// SPACE: O(1)
function findRepeat2(numbers) {
  let n = numbers.length - 1;
  let sumWithoutDuplicate = (n**2 + n)/2

  let actualSum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)

  return actualSum - sumWithoutDuplicate;
}

// Tests

let desc = 'short array';
let actual = findRepeat([1, 2, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([4, 1, 3, 4, 2]);
expected = 4;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
expected = 2;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
