// PROBLEM: given an array of numbers, return the highest product of 3
// can include negative numbers

// APPROACH: using a greedy approach to keep track of the current highest product of 3 as
// iterate through the array
// do this by multiplying the current number by the highest prod of 2 (or lowest prod of 2
// in case of negatives) to find the highest product of 3 at that moment
// in order to find the lowest and highest prod of 2 at the moment, need to find the highest and lowest


// Greedy approach from interview cake: "Suppose we could come up with the answer in one pass through the input, 
// by simply updating the 'best answer so far' as we went. 
// What additional values would we need to keep updated as we looked at each item in our set, in order to be able to update the 'best answer so far' in constant time?"

// TIME: O(n) to iterate through the array
// SPACE: O(1) constant to store the highestProd3, lowestProd2, highestProd2, highest, lowest

function highestProductOf3(arr) {
  if (arr.length < 3) {
    throw new Error('less than 2 items')
  }
  
  // prepopulate the highest and lowests
  let highestProd3 = arr[0] * arr[1] * arr[2];
  let highestProd2 = arr[0] * arr[1];
  let lowestProd2 = arr[0] * arr[1];
  let highest = Math.max(arr[0], arr[1])
  let lowest = Math.min(arr[0], arr[1])

  // start at the 3rd item since we prepopulated our variables
  for (let i = 2; i < arr.length; i++) {
    let current = arr[i];

    // do we have a new highest product of 3?
    // it is either the current highest product of 3, the highest product of 2 times the current,
    // or the lowest product of two times the current
    highestProd3 = Math.max(highestProd3, highestProd2 * current, lowestProd2 * current);
    highestProd2 = Math.max(highestProd2, highest * current, lowest * current);
    lowestProd2 = Math.min(lowestProd2, highest * current, lowest * current);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current)
  }

  return highestProd3;
}
