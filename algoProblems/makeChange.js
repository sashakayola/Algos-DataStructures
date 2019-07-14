// PROBLEM:
// Write a function that, given: an amount of money, an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available denominations.

// APPROACH: dynamic programming approach
// to calculate the number of ways to make an amount, find the number of ways to make that 0 -> that amount with each number
// for example, if we wanted to find the number of ways to make 2 cents with [1, 2] --> the number of ways to make 0 with 1 cent is 0, to make 1 with 1 cent is 1, to make 2 cents with 1 cent is 1
// the number of ways to make 0 cents with 2 cent denom is 0, make 1 cents with 2 is 0, and make 2 cents with 2 is 1
// with each denomination, we know that the number of ways to get the amount is the number of ways to get to the amount - denomination
// using the array, we can build up that result (amount - denomination)
// TIME: O(nm) where n is the amount, and m is the number of denominations
// SPACE: O(n) where n is the amount

// ASIDE FROM INTERVIEW CAKE: Dynamic programming is kind of like the next step up from greedy. ↴ You're taking that idea of "keeping track of what we need in order to update the best answer so far," and applying it to situations where the new best answer so far might not just have to do with the previous answer, but some other earlier answer as well.
// So as you can see in this problem, we kept track of all of our previous answers to smaller versions of the problem (called "subproblems") in a big array called waysOfDoingNCents.

function makeChange(amount, denominations) {
  // create an empty array to store the number of ways to get to each index amount up to the actual amount
  let combos = new Array(amount + 1).fill(0);
 
  // for each coin
  for (let i = 0; i < denominations.length; i++) {
    let currentDenomination = denominations[i];
    
    // go through the combos array, and add in the number of ways to get to each index sum if we were to use that denomination
    // to get this amount, we are just adding the number of combos is takes to the that indexSum - denomination
    for (let i = 0; i < combos.length; i++) {
      let numWaysToGetToIndex = i - currentDenomination;
      // if the index sum is equal to the denomination, add one because it will take exactly one of those coins to get itself
      if (numWaysToGetToIndex === 0) {
        combos[i]++;
      }
      // if the index sum is greater than the denomination
      // for example, if you were looking at index 5 and with denomination 2, you know that to get to a sum of 5 with 2 cents, you will need to find how to get to 3 cents (5 - 2 = 3). you already have that calculated in the array conviently at index 3 (the number of combos we know of how to get to 3 with the denominations we currently looked at)
      if (numWaysToGetToIndex > 0) {
      combos[i] += combos[numWaysToGetToIndex];
      }
    }
  }

  return combos[amount];
}

// console.log(makeChange(7,[1,2,3])) // 8
// console.log(makeChange(4, [1, 2, 3])) // 4
// console.log(makeChange(100, [1, 5, 10, 25, 50])) // 292
