// PROBLEM: Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// APPROACH 1: using splice. not a good solution!
// O(N) to go through the string but using .splice under the hood is likely O(N) as well so total time is O(N^2)
// SPACE: O(1) constant space, no additional memory allocated for the array itself
var reverseString1 = function(str) {
    for (let i = 0; i < str.length; i++) {
        str.splice(str.length - i - 1, 0, str.shift());
    }
    
    return str;
};

// APPROACH 2: two pointers where you just swap the the first letter (first pointer) with the last letter (last pointer). once both the pointers meet or pass each other (for even length strings), stop swapping. so while the left pointer is less than the right pointer (have no met or surpassed one another), keep swapping
// TIME: O(N) because we are going through the entire string 
function reverseString2(str) {
  let pointer1 = 0;
  let pointer2 = str.length - 1;

  while (pointer1 < pointer2) {
    let firstChar = str[pointer1];
    str[pointer1] = str[pointer2];
    str[pointer2] = firstChar;
    pointer1++;
    pointer2--;
  }

  return str;
}

// APPROACH 3: recursive
// (slower than iterative approach with two pointers)
function reverseString3(str) {
  // base case is when we get it down to one character
  if (str.length === 1) {
    return;
  }
  let temp = str[0];
  str.shift();
  reverseString3(str);
  str.push(temp);
}

reverseString3(["h","e","l","l","o"]) // ["o","l","l","e","h"]
