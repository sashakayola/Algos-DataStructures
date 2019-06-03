// PROBLEM: given a 5 sided die, how can you simulate a 7 sided die (probabilities must be equal of 1-7)
// TIME: O(infinity) (small chance if we re-roll forever)
// SPACE: O(1) constant space

function r5() {
  return Math.floor(Math.random() * (5 - 1)) + 1; 
}

// transform all 25 possible results from rolling two 5 sided die twice into a table where of the 25 possibilities, these translate to a number between 1-7
// if the result is > 21 then re-roll
function r7() {
   const results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 0, 0, 0, 0],
  ];

  let roll1 = r5();
  let roll2 = r5();

  while (results[roll1][roll2] === 0) {
    let roll1 = r5();
    let roll2 = r5();
  }

  return results[roll1][roll2];
}

r7();
