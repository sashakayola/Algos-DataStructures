// PROBLEM: given a 7 sided die, how can you simulate a 5 sided die (probabilities must be equal of 1-5)
// rand7() returns each integer with equal probability. rand5() must also return each integer with equal probability
// TIME: O(infinity) there is a very small chance that you will only get numbers above 5 when you roll a 7 but the chance of this is very small
// SPACE: O(1) constant space

function r7() {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1)) + 1; 
}

// the only way to get 100% equal probabilities is to roll the die until you get a number between 1 and 5
// if you get a number above 5, re-roll

// used an iterative approach because with recursive approach, although cleaner, could result in a stack overflow
function r5() {
  let roll = r7();
  while (roll > 5) {
   roll = r7() 
  }
  return roll;
}
