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

// subarrayProducts([1,2,3,4,5], 6) // 7
// subarrayProducts([3,4,5,12,20,60], 5) // 3
// subarrayProducts([10,5,2,6],100) // 8
// subarrayProducts([1,1,1], 2) // 6
subarrayProducts([1,1,1], 1) // 0
