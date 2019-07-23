// https://leetcode.com/problems/single-number/solution/
// PROBLEM: Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// APPROACH 1: using a hash to keep track
// TIME: O(n) using hash for constant lookup but still need to iterate over all numbers
// SPACE: O(n) storing all numbers in hash potentially
var singleNumber = function(nums) {
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (hash.hasOwnProperty(num)) {
            delete hash[num];
        } else {
            hash[num] = true;
        }
    }
    
    // The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
    return Number(Object.keys(hash)[0])
};

// APPROACH 2: XOR a value with itself results in 0
// XOR of a number and zero returns the number
// XOR of a number with itself is 0
// XOR all bits together to find the unique number.
// TIME: O(n)
// SPACE: O(1)

// var singleNumber = function(nums) {
//     let runningNum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         runningNum ^= nums[i]
//     }
    
//     return runningNum;
    
//     // return nums[0] ^ nums[1] ^ nums[2];
//     // console.log(1 ^ 2)
//     // console.log(1 ^ 1)
//     // console.log(3 ^ 3)
//     // console.log(1^3)
//     // console.log(2^1)
// };
