// PROBLEM: Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

// APPROACH: Fisher-Yates shuffle: The Fisher-Yates shuffle algorithm (also called the Knuth shuffle) walks a list of items and swaps each item with another in the list. Each iteration the range of swappable items shrinks. The algorithm starts at index zero (it can also walk the list in reverse), and chooses a item from  0 to N at random. This selection freezes the 0th element in the shuffled list. The next iteration moves to index 1 and chooses an item from the remaining 1 to N indices. This repeats until the entire list is walked.
// TIME: O(n) time 
// SPACE: O(1) in place

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  if (array.length <= 1) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    // call get random random from i (the current index) to the remaining elements we can swap with 
    // NOTE: you have to get the random index starting from the current index rather than swapping from anything in the array (startign from zero) because those numbers before are already locked down
    // ae, if you have 5 cards to shuffle, and you pick one random as the first, you can't pick it again later down the line (locked down)
    let indexToSwapWith = getRandom(i, array.length - 1);
    array[i] = array[indexToSwapWith];
    array[indexToSwapWith] = currentNum;
  }
}

const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);
