// PROBLEM: Given two strings s and t , write a function to determine if t is an anagram of s.

// APPROACH: if the length of the two strings is different, immediately return false
// iterate over string s and add all keys and the number of times they appear into a hash
// iterate over string t and for each letter, if in the hash, decrement the number of times it appears in the hash by one
// if the letter in t is not in the hash, return false
// if it is in the hash but shows 0 times, return false

// TIME: O(n+m) to iterate over string s and t
// SPACE: O(n) to store string s in a hash

var isAnagram = function(s, t) {
    let hash = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]]++;
        }
        else {
            hash[s[i]] = 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]]) {
            if (hash[t[i]] === 0) {
                return false;
            } else {
                hash[t[i]]--
            }
           
        } else {
            return false;
        }
    }
    
    return true;
};



