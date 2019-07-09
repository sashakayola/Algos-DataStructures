// PROBLEM: given an array of numbers and a starting index. Can move forward or back based on value at index (you can wrap around the array if you are jumping past the last index or the first index). See if you can ever get to an index that’s value is 0.
// APPROACH: use a set to keep track of the index's we have visited using a forward and back variable. keep looping through the array until we either find 0 or have visited that index (return false)
// TIME: O(n) in worst case, will iterate through the entire array once

function getToZero(arr, start) {
  let seen = new Set();
  let forward = start;
  let back = start;
  
  while (!seen.has(forward) && !seen.has(back)) {
    // if either back or forward values equal 0, return true;
    if (arr[forward] === 0 || arr[back] === 0) {
      return true;
    }

    seen.add(forward);
    seen.add(back);

    // increment the forward
    forward += arr[start];
    if (forward > arr.length - 1) {
      forward -= arr.length;
    }

    // decrement the back
    back -= arr[start];
    if (back < 0) {
      back += arr.length; 
    }
  }

  return false;
} 

getToZero([3, 1, 0, 4, 8, 7, 9, 2], 1)
