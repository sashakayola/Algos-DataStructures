// PROBLEM: Given an unsorted array of integers, return true if you find a subarray which adds to a given number
// Handles negative numbers.

// APPROACH: iterate through the array and calculate the running sum. at each iteration, see if the runningSum - target is in the hash
// if it is, return true. If not, add the running sum to the hash
// TIME: O(n) because iterate through the array once
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

subarraySum([10, 2, -2, -20, 10], -10)
