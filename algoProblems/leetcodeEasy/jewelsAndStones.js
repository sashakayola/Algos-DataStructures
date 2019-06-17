// PROBLEM: You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// APPROACH: add all jewels to a hash for constant look up time. iterate through all stones and add 1 to total jewel count if in hash
// TIME: O(m+n) where m is the number of unique jewels and n is the number of stones
var numJewelsInStones = function(jewels, allStones) {
    let numberOfJewels = 0;
    
    let hash = {};
    
    // iterate through jewels and add the jewels to a hash table
    for (let i = 0; i < jewels.length; i++) {
        hash[jewels[i]] = true;
    }
    
    // iterate through all your stones and see if each is a jewel
    for (let i = 0; i < allStones.length; i++) {
        if (hash.hasOwnProperty(allStones[i])) {
            numberOfJewels++;
        }
    }
    
    return numberOfJewels;
};
