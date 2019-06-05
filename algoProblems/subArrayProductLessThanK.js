// PROBLEM: given an array of integers and an integer k, determine the total number of continuous subarrays of numbers having a product that is less than k
// TIME: O(n)

// APPROACH 1: keep track of all the previously seen valid products in an array
// iterate through the array and add in new valid products as you go
function subarrayProducts(arr, k) {
  let subArrays = [];
  let indexOfPrevPrev = 0;
  let indexOfPrevNum = 0;
  
  // add the first num in the arr to the subArrays array if k / num > 1
  if (k / arr[0] > 1) {
    subArrays.push(arr[0]);
  }

  for (let i = 1; i < arr.length; i++) {
    // for each number, add it to the subArrays array if the k / number > 1
    let currentNum = arr[i];

    if (k / currentNum > 1) {
    subArrays.push(currentNum);
    indexOfPrevNum = subArrays.length - 1;
    
    // do another for loop starting at the index where the previous element in the array was added; add the valid products with each element thereafter
      let subArrayLen = subArrays.length;
      for (let j = indexOfPrevPrev; j < subArrayLen - 1; j++) {
        let previousNum = subArrays[j];
        if (previousNum * currentNum < k) {
          subArrays.push(previousNum * currentNum);
        }
      }
     indexOfPrevPrev = indexOfPrevNum;
     }
  }
  
  return subArrays.length;
}

// APPROACH 2: sliding window approach
function subarrayProducts(arr, k) {
  // start the window with the left point at index 0
  let leftPointer = 0;

  // keep track of the running product
  let runningProduct = 1;

  // the count is the number of valid subArrays
  let count = 0;

  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    // if the current number we are looking at is greater than k, move on (continue with the next number in the array)
    if (currentNum < k) {
      // if the current number is less than k, add 1 to the count
      count++;
      // recalculate the runningProduct now that our 'window' has increased in size by 1
      runningProduct *= currentNum;
    
      // if the runningProduct is less than k, great. add the appropriate amount to the count (how large the window is)
      if (runningProduct < k) {
        count += (i - leftPointer);
      }

      // if the runningProduct is greater than k, than move the leftPointer over one to the right and recalculate the runningProduct (divide runningProduct by the value in the leftPointer)
      else {
        while (leftPointer < i && runningProduct >= k) {
          runningProduct /= arr[leftPointer];
          leftPointer++;
        }
        // once the runningProduct is less than k again, add the appropriate amount to the count (the size of the window)
        count += (i - leftPointer);
      }
    }

  }

  return count;
}


// subarrayProducts([1,2,3,4,5], 6) // 7
// subarrayProducts([3,4,5,12,20,60], 5) // 3
// subarrayProducts([10,5,2,6],100) // 8
// subarrayProducts([1,1,1], 2) // 6
subarrayProducts([1,1,1], 1) // 0
