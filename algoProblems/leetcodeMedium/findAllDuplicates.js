// PROBLEM: Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Solve without extra space and in O(n) time

// APPROACH: go through the array of numbers. for each number, change the sign of the number in that index to the opposite of what it is
// if after changing the sign the number is positive, you know that this number is duplicate
// The reason the above approach works is because this array is size of n and the numbers in the array are 1 - n (you can take advantage of this by using the index as an extra 'storage')
// TIME: O(n) time to run through the numbers in the array once
// O(1) space (no extra space needed to store the array / no hash, etc)

function findDuplicates(nums) {
  let duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNum = Math.abs(nums[i]);
    // console.log(currentNum)
    nums[currentNum - 1] *= -1;
    console.log(nums[currentNum - 1])
    if (nums[currentNum - 1] > 0) {
      duplicates.push(currentNum);
    }
  }

  return duplicates;
}

// console.log(findDuplicates([4,3,2,7,8,2,3,1])) //[2,3]
console.log(findDuplicates([5, 1, 2, 1, 5])) // [1, 5]
