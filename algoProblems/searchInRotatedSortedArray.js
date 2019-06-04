// PROBLEM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// TIME: O(logn) modified binary search

// APPROACH 1: find the break point, see if the target before or after the breakpoint, then do the binary search on that half
function search(arr, target) {

  // go through the array once to find the rotated point
  let firstElement = arr[0];
  let breakPoint = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstElement) {
      firstElement = arr[i];
    } else {
      // return the index where the break point is ae where the new array ends
      breakPoint = i;
      break;
    }
  }

  let rightPointer = arr.length - 1;
  let leftPointer = 0;
  // initially set the midPointer to be the breakPoint ae where the rotation occurred
  
  // see if the target number is greater than the rightPointer
  // if yes, then set the new rightPointer to be the breakPoint
  if (target === arr[rightPointer]) return rightPointer;
  else if (target > arr[rightPointer]) {
    rightPointer = breakPoint - 1;
  } 
  else {
    leftPointer = breakPoint;
  }

  while (rightPointer >= leftPointer) {
    let midPointer = Math.floor((rightPointer + leftPointer) / 2);
    console.log(midPointer)
    if (target === arr[midPointer]) return midPointer;
    else if (target < arr[midPointer]) rightPointer = midPointer - 1;
    else leftPointer = midPointer + 1;
  }

  return -1;
}

// APPROACH 2: slightly cleaner version of the above, still modified binary search with some extra checks to see if in left half or right half
function search(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let mid = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    console.log('mid',mid)

    if (arr[mid] === target) return mid;

    // check if in the left sorted part
    if (arr[leftPointer] <= arr[mid]) {
      if (target >= arr[leftPointer] && target < arr[mid]) {
        rightPointer = mid - 1;
      }
      // else the target is greater than the mid
      else {
        leftPointer = mid + 1;
      }
    }

    // else in the right sorted part
    else {
      if (target > arr[mid] && target <= arr[rightPointer]) {
        leftPointer = mid + 1;
      }
      // else the target is less than the mid but greater than or equal to the left
      else {
        rightPointer = mid - 1;
      }
    }
  }

  return -1;
}
