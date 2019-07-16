// PROBLEM: I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.
// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. 
// Write a function to find the index of the rotation point

// APPROACH: we essentially want to find the word that came first in the alphabet. use binary search to find
// TIME: O(logn)
// SPACE: O(1) constant

// ASIDE FROM INTERVIEW CAKE: Binary search teaches us that when an array is sorted or mostly sorted:
// The value at a given index tells us a lot about what's to the left and what's to the right.
// We don't have to look at every item in the array. By inspecting the middle item, we can "rule out" half of the array.
// We can use this approach over and over, cutting the problem in half until we have the answer. This is sometimes called "divide and conquer."
function findRotationPoint(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);

    let left = arr[leftPointer];
    let right = arr[rightPointer];
    let mid = arr[midPointer];
    
    // once the left and right pointer are next to each other, return the index with the smallest word
    if (rightPointer - leftPointer === 1) {
      if (left < right) {
        return leftPointer;
      } else return rightPointer;
    }
    if (mid > left) { // we know that the rotation point has to come after the mid
      leftPointer = midPointer;
    }
    else if (mid < right) {
      rightPointer = midPointer;
    }
  }
  
  return false;
}

// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
