// PROBLEM: https://leetcode.com/problems/remove-outermost-parentheses/

// APPROACH: keep a count variable as a stack; add one to the count for an open paren and subtract 1 from the count for a closed paren
// when the closed stack = 0, you know you have reached the primitive decomposition of that parenthesis
// TIME: O(n) to go through the string once
// SPACE: O(n) to store the temp paren primitive decompositions (in worst case need to store the entire string)

var removeOuterParentheses = function(str) {
    let count = 0;
    let primitive = ''
    let temp = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++;   
        }
        else if (str[i] === ')') {
            count--;
        }
        temp += str[i];
        if (count === 0) {
            primitive += temp.slice(1,temp.length - 1);
            temp = '';
        }
    }
        
    return primitive;
};
