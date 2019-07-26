// PROBLEM: https://leetcode.com/problems/jump-game/
// note: easier version of jump game II
// APPROACH: same approach as jump game II but here, keep track of the last index we were at. if we try to jump further but end up at the same index, we know that we cannot reach the end of the array
// APPROACH: O(n) at worst case, have to jump 1 every time
// SPACE: O(1) constant

function canJump(arr) {
  let numJumps = 0;
  let currentPoint = 0;
  let lastCurrentPoint = 0;
    
  while(currentPoint < arr.length) {
    let numPossibleJumps = arr[currentPoint];
    let totalReach = currentPoint + numPossibleJumps;

    // if we are at the end, return true
    if (currentPoint === arr.length - 1) {
      return true;
    }

    // if we would reach the end with one more jump, return true
    if (totalReach >= arr.length - 1) {
      return true;
    }

    let currentMax = 0;
    let currentMaxIndex = 0;
    let numPossibleJumpsAdjusted = numPossibleJumps - 1;

    // calculate the furthest point we could get to
    for (let j = currentPoint; j <= currentPoint + numPossibleJumps; j++) {
      let newValue = arr[j] - numPossibleJumpsAdjusted;
      if (newValue >= currentMax) {
        currentMax = newValue;
        currentMaxIndex = j;
      }
      numPossibleJumpsAdjusted --;
    }

    // if the furthest point we could get to is exactly the same as the point we are at now, return false (we can never reach the end)
    currentPoint = currentMaxIndex;
    if (currentPoint === lastCurrentPoint) {
        return false;
    } else {
        lastCurrentPoint = currentPoint;
    }
  }

  return true;
}
