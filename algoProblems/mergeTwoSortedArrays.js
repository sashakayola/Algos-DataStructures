// PROBLEM: merge two sorted arrays into one sorted array
// TIME: O(n) n is the number of items in the merged array because have to look at every element
// SPACE: O(n) no way to do in place because neither array necessarily big enough to hold elements
// if they were linked lists, could do in place by just adjusting pointers

// PROBLEM ADAPTION: What if we wanted to merge several sorted arrays? (k arrays)
// APPROACH 1: copy all arrays into one array and sort. This would take knlogkn TIME
// APPROACH 2: merge 2 arrays at a time. would have to do a total of k/2 merges and each merge take 2n time. Time complexity would be knlogk

// APPROACH 1
function mergeArrays(arr1, arr2) {
  let newArr = [];

  let arr1Pointer = 0;
  let arr2Pointer = 0;

  // go through each array until we have hit the end of one. 
  // short circuit (end the while loop) if either array is exhausted already
  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      newArr.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
    else if (arr2[arr2Pointer] < arr1[arr1Pointer]) {
      newArr.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  // check if there are leftovers in either array
  while (arr1Pointer < arr1.length) {
    newArr.push(arr1[arr1Pointer]);
    arr1Pointer++;
  }
  while (arr2Pointer < arr2.length) {
    newArr.push(arr2[arr2Pointer]);
    arr2Pointer++;
  }

  return newArr;
}

// APPROACH 2: slightly better version of the approach above where I use a pointer for the new array to add to the new array instead of using push
function mergeArrays(arr1, arr2) {
  let newArr = [];
  // have a variable keeping track of where in the newArr we are
  let mergedIndex = 0;
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  // go through each array until we have hit the end of one. 
  // short circuit (end the while loop) if either array is exhausted already
  while (mergedIndex < (arr1.length + arr2.length)) {
    let arr1Exhausted = arr1Pointer >= arr1.length;
    let arr2Exhausted = arr2Pointer >= arr2.length;
    
    // two cases:
    // 1. arr1 is not exhausted but arr2 is exhausted
    // 2. arr1 is not exhausted and the value in arr1 is less than in arr2
    if (!arr1Exhausted && (arr2Exhausted || arr1[arr1Pointer] < arr2[arr2Pointer])) {
      newArr[mergedIndex] = arr1[arr1Pointer];
      arr1Pointer++;
      mergedIndex++;
    }
    // get to this else if either
    // 1. arr1 is exhausted but arr2 is not
    // 2. arr1 is not exhausted but the value in arr1 is greater than in arr2 
    else {
      newArr[mergedIndex] = arr2[arr2Pointer];
      arr2Pointer++;
      mergedIndex++;
    }
  }
  
  return newArr;
}

