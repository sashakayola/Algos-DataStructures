// PROBLEM: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/

// APPROACH: if the number ever repeats, this is the number we want
// use a set to keep track
// TIME: O(n)
// SPACE: O(n) to store the numbers in the hash
var repeatedNTimes = function(A) {
    let set = new Set();
    
    for (let num of A) {
        if (set.has(num)) {
            return num;
        } else {
            set.add(num)
        }
    }
};
