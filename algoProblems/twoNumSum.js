// Determine if two numbers in the array sum up to the target
// talk about the different solutions to see if the array is sorted and whether to value space or time (hash table solution is if we value time and sorted solution if we value space)

// APPROACH 1: naive approach of two for loops

// APPROACH 2: iterate through the array of numbers and find the difference between each number and the target
// if that difference is in a hash, return true. if not, add the number to the hash
// TIME: O(n)
// SPACE: O(n) in worst case
function canTwoMoviesFillFlight2(array, target) {
  let differencesSet = new Set();

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let difference = target - num;
    if (differencesSet.has(difference)) {
      return true;
    } else {
      differencesSet.add(num)
    }
  }

  return false;
}

// APPROACH 3: sort and then start on both ends and see if the numbers add to the target
// TIME: O(nlogn) to sort
// SPACE: O(1) constant
function canTwoMoviesFillFlight(array, target) {
  let arraySorted = array.sort();
  let rightPointer = array.length - 1;
  let leftPointer = 0;

  // while the pointers don't meet or overlap
  while (leftPointer < rightPointer) {
    let sum = array[rightPointer] + array[leftPointer];
    if (sum === target) {
      return true;
    }
    if (sum < target) {
      leftPointer++;
    }
    if (sum > target) {
      rightPointer--;
    }
  }

  return false;
}



// Tests

let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'not using first movie';
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
