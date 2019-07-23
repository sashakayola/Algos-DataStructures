// https://leetcode.com/problems/di-string-match/
// APPROACH: greedy APPROACH
// set up a min and max variables to keep track of the next available smallest and largest value
// for the first character, if it is an I, we know that we should start our result permutation with the lowest possible number 0
// if it is decreasing, we should start it off with the largest possible number
// we keep doing this as we iterate through the string and finally, we finish off the result permutation based on what the last character in the string wants us to doing
// TIME: O(n) to go through the string
// SPACE: O(1) constant

var diStringMatch = function(str) {
    let permutation = [];
    let min = 0;
    let max = str.length;
    
    for (i in str) {
      let char = str[i];
        if (char === "I") {
            permutation.push(min)
            min++;
        } else {
            permutation.push(max);
            max--;
        }
    }
    
    if (str[str.length-1] === 'I') {
        permutation.push(max);
    } else {
        permutation.push(min);
    }
    
    return permutation;
};

console.log(diStringMatch("IDID")) // [0,4,1,3,2]
