// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
// PROBLEM: given a sorted array, return the number of unique elements
// TIME: O(n)
// SPACE: O(1)
var removeDuplicates2 = function(nums) {
    let numUnique = 0;

    for (let i = 0; i < nums.length - 1;) {
        if (nums[i] !== nums[i+1]) {
            numUnique++;
        }
       i++
    }
     
    return numUnique + 1; 
};

// PROBLEM: given a sorted array, remove the duplicates, return the number of unique elements
// TIME: O(n^2) because iterating over numbers and then splicing
// SPACE: O(1) in place
var removeDuplicates = function(nums) {

    for (let i = 0; i < nums.length - 1;) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1);
            continue;
        }
        // only increment i in the case that the numbers weren't equal. otherwise, because we are splicing in the case that the numbers are equal, i will be pointing to the number index without incrementing i
       i++;
    }
     
    return nums.length; 
};

// console.log(removeDuplicates([1,1,2,3,3,5]))
// console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
