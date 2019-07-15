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

  let num = 0;

  while (num === 0) {
    let resultFromFive = r5();
    let resultFromFive2 = r5();
    num = results[resultFromFive][resultFromFive2];
  }

  return num;
}

r7();
