// PROBLEM: Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.
// For example,   
// const cakeTypes = [
//   { weight: 7, value: 160 },
//   { weight: 3, value: 90 },
//   { weight: 2, value: 15 },
// ];
// const capacity = 20;
// maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

// APPROACH: dynamic programming bottom up approach 
// initialize an array to store the maximum value we can get at every capacity up to the goal capacity
// calculate the max value we can get at for instance capacity 0, then capacity 1, etc.
// to find the max capacity at each current index in that array, we iterate through our cake cakeTypes
// and see if we can add in that cake to our stash. if we add in that cake, we know we will need the max out the remaining weight neeeded
// TIME: O(n*m) where n is the capacity goal and m is the cakeTypes
// SPACE: O(n) where n is the capacity

// We loop through each cake n for every capacity k, so our runtime is O(n*k), and maintaining the array of k+1k+1 capacities gives us the O(k)O(k) space.

function maxDuffelBagValue(cakeTypes, capacity) {
  let maxValues = new Array(capacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity < maxValues.length; currentCapacity++) {
    // calculate the max value we can get at each capacity
    let currentMaxValue = 0;

    for (let cake of cakeTypes) {
      if (cake.weight === 0 && cake.value > 0) {
        return Infinity;
      }
      let currentValue = 0;
      // if we have enough weight for the cake, find the value of adding in that cake to our stash
      if (cake.weight <= currentCapacity) {
                                      // find the max value at the remaining weight
        currentValue += cake.value + maxValues[currentCapacity - cake.weight];
        // if the total value from adding that cake has increased our max value at that capacity, make the current max value equal to this haul's value
        currentMaxValue = Math.max(currentValue, currentMaxValue)
      }
    }
    // the final max value at that weight will be the current max value
    maxValues[i] = currentMaxValue;
  }

  // finally return the max value at the goal weight
  return maxValues[maxValues.length - 1]
}


let desc = 'one cake';
let actual = maxDuffelBagValue([{ weight: 2, value: 1 }], 9);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'two cakes';
actual = maxDuffelBagValue([
  { weight: 4, value: 4 },
  { weight: 5, value: 5}], 9);
expected = 9;
assertEqual(actual, expected, desc);

desc = 'only take less valuable cake';
actual = maxDuffelBagValue([
  { weight: 4, value: 4 },
  { weight: 5, value: 5 }], 12);
expected = 12;
assertEqual(actual, expected, desc);

desc = 'lots of cakes';
actual = maxDuffelBagValue([
  { weight: 2, value: 3 },
  { weight: 3, value: 6 },
  { weight: 5, value: 1 },
  { weight: 6, value: 1 },
  { weight: 7, value: 1 },
  { weight: 8, value: 1 }], 7);
expected = 12;
assertEqual(actual, expected, desc);

desc = 'value to weight ratio is not optimal';
actual = maxDuffelBagValue([
  { weight: 51, value: 52 },
  { weight: 50, value: 50 }], 100);
expected = 100;
assertEqual(actual, expected, desc);

desc = 'zero capacity';
actual = maxDuffelBagValue([{ weight: 1, value: 2 }], 0);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'cake with zero value and weight';
actual = maxDuffelBagValue([
  { weight: 0, value: 0 },
  { weight: 2, value: 1 }], 7);
expected = 3;
assertEqual(actual, expected, desc);

desc = 'cake with non-zero value and zero weight';
actual = maxDuffelBagValue([{ weight: 0, value: 5 }], 5);
assertEqual(isFinite(actual), false, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
