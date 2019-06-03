// PROBLEM: Write an efficient method that checks whether any permutation of an input string is a palindrome
// TIME: O(n) because we iterate through the string once
// SPACE: O(n) because at worst case we have to store all the letters in the set

// APPROACH 1: the only way for a string to be a palindrome is if all letters in the string have doubles or if there is one letter left over (and the other letters have doubles)
// so, iterate through all the letters in the string
// add them to a set if that letter is not already in the set
// at the end, if there are 0 or 1 letters in the set, the string can be permutated into a palindrome

function permutationPalindrome(str) {
  // intialize an array that will act as a set
  let letters = [];

  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      letters.splice(letters.indexOf(str[i]), 1);
    } else {
      letters.push(str[i])
    }
  }

  if (letters.length > 1) return false;
  else return true;
}

// APPROACH 2: using a javascript set (ES6)
function permutationPalindrome(str) {
  let letters = new Set();

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i]
    if (letters.has(currentLetter)) {
      letters.delete(currentLetter)
    } else {
      letters.add(currentLetter)
    }
  }
  
  // check if less than two letters have a pair
  return letters.size <= 1;
}
