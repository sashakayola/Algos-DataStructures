// PROBLEM: Given an array of numbers, return true if there is a contiguous subarray that sums up to a certain number n. Assume no negative numbers.
// TIME: O(n) for the efficient solution below (a O(n^2) solution exists as well which is just two for loops)

// APPROACH: create window where our subarray exists; start the window at the first number in the array
// iterate through the array and increase the size of the window (add the current number into the running sum) if the target is larger than
// the running sum
// if the running sum is too large, subtract the numbers at the start of the window
function subarraySum(arr, target) {
  let runningSum = arr[0];
  let leftPointer = 0;
  
  for (let i = 1; i <= arr.length; i++) {
    let currentNum = arr[i];
  
    // need a while loop for a case like this --> subarraySum([3,6,12,35], 47) because we will have iterated through the whole array and the runningSum will be 56 (3+6+12+35)
    // we then have a while loop to decrease the running sum to first 56 - 3 = 53
    // 53 is still larger than the target so we will move the leftPointer over again so now 53 - 6 = 47. we now have the target number! 
    while (runningSum > target && leftPointer < i - 1){
      runningSum -= arr[leftPointer];

      leftPointer++;
    }

    if (runningSum < target) {
      runningSum += currentNum;
    }

    if (runningSum === target) return true;    
  }
  return false;
}

// APPROACH 2: iterate through the array and calculate the running sum. at each iteration, see if the runningSum - target is in the hash
// if it is, return true. If not, add the running sum to the hash
// NOTE: the below solution works with negative numbers too
function subarraySum(arr, target) {
  let sumsMap = {0: 1}; // hash of previous sums
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  	sum += arr[i];
    if (sumsMap[sum - target]) {
    	return true;
    }
    sumsMap[sum] = true;
  }
  return false;
}

// subarraySum([1,2,3],3)
// subarraySum([1,2,3],6)
subarraySum([3,6,12,35],12)
