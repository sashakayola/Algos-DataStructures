// PROBLEM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// TIME: O(logn) modified binary search

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
