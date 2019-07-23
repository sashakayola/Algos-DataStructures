// https://leetcode.com/problems/unique-morse-code-words/
// TIME: O(nm) where n i the number of words in the array, and m is the total letters in each word
// SPACE: O(n) worst case to store all the words

var uniqueMorseRepresentations = function(words) {
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let wordsHash = new Set();
    
    for (let i = 0; i < words.length; i++) {
        let word = ''
        for (let j = 0; j < words[i].length; j++) {
            let letter = words[i][j];
            let indexOfLetter = alpha.indexOf(letter.toLowerCase());
            let morseLetter = morse[indexOfLetter];
            word += morseLetter;
        }  
        wordsHash.add(word)
    }
    
    return wordsHash.size;
};
