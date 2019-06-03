// PROBLEM: given a 5 sided die, how can you simulate a 7 sided die (probabilities must be equal of 1-7)
// TIME: O(infinity) there is a very small chance that you will only get numbers above 5 when you roll a 7 but the chance of this is very small
// SPACE: O(1) constant space

function r5() {
  return Math.floor(Math.random() * (5 - 1)) + 1; 
}

// the only way to get 100% equal probabilities is to roll two dies, sum up the results. If the sum is gerater than 7, re-roll

// used an iterative approach because with recursive approach, although cleaner, could result in a stack overflow
function r7() {
  let roll1 = r5();
  let roll2 = r5();
  while (roll1 + roll2 > 7) {
    let roll1 = r5();
    let roll2 = r5();
  }
  return roll1 + roll2;
}
