// PROBLEM: https://leetcode.com/problems/jump-game-ii/submissions/
// APPROACH: use an iterate, greedy APPROACH
// starting at the 0th index, see how far you would get if you jumped that amount
// if you are at the end, you are done.
// if you aren't done, then find the farthest place you will end up with of 1 jump, 2 jump, etc. until you reach the value at the index
  // when finding the farthest you can go at each jump, make sure you find the adjusted amount (don't just take the maximum value, but take the actual farthest index you could end up at)
// APPROACH: O(n) at worst case, have to jump 1 every time
// SPACE: O(1) constant

function minimumNumberJumps(arr) {
  let numJumps = 0;
  let currentPoint = 0;

  while(currentPoint < arr.length) {
    let numPossibleJumps = arr[currentPoint];
    let totalReach = currentPoint + numPossibleJumps;

    if (currentPoint === arr.length - 1) {
      return numJumps;
    }

    if (totalReach >= arr.length - 1) {
      numJumps++;
      return numJumps;
    }

    let currentMax = 0;
    let currentMaxIndex = 0;
    let numPossibleJumpsAdjusted = numPossibleJumps - 1;

    for (let j = currentPoint; j <= currentPoint + numPossibleJumps; j++) {
      let newValue = arr[j] - numPossibleJumpsAdjusted;
      if (newValue >= currentMax) {
        currentMax = newValue;
        currentMaxIndex = j;
      }
      numPossibleJumpsAdjusted --;
    }

    currentPoint = currentMaxIndex;
    numJumps++;
  }

  numJumps++;
  return numJumps;
}

// console.log(minimumNumberJumps([2,4,1,1,2,3,7,1,1,3])) // 4
// console.log(minimumNumberJumps([2,4,1,4,2,3,7,1,8,3,2,1,4,1,1,2,3,8,1,4,2,3])) // 6
// console.log(minimumNumberJumps([2,3,1,1,4])) // 2
// console.log(minimumNumberJumps([2,3,1])) // 1
