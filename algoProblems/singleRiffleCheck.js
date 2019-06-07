// PROBLEM: Write a method to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2
// TIME: O(n) because we need to go through the entire deck, O(1) constant space

// APPROACH: go through each card in the shuffled pile. at the same time, go through both half1 and half2. for each card that you flip (look at) in the shuffled pile,
// check to make sure it is the next card that appears in either half1 or half2. if not, then return false (the decks have been riffled more than once)
function riffler(half1, half2, shuffled) {
  let firstIndex = 0;
  let secondIndex = 0;
  
  for (let i = 0; i < shuffled.length; i++) {
    let half1Pointer = half1[firstIndex];
    let half2Pointer = half2[secondIndex];
    let current = shuffled[i];
    
    if (current !== half1Pointer && current !== half2Pointer) {
      return false;
    }
    else if (current === half1Pointer) {
      firstIndex++;
    }
    else if (current === half2Pointer) {
      secondIndex++
    }
  }
  return true;
}

let h1 = [1, 3, 5, 7, 9]
let h2 = [2, 4, 6, 8, 10]

let trueDeck = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9]
let falseDeck = [1, 3, 2, 5, 4, 6, 8, 10, 9, 7]

console.log(riffler(h1, h2, trueDeck)) // true
console.log(riffler(h1, h2, falseDeck)) // false
