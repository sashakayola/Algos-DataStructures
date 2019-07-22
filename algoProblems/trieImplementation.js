// PROBLEM: create a class to efficiently store url addresses
// currently storing url's in a set but running out of room

// SOLUTION 1: we notice that a lot of urls have the same starting point such as www.
// we could make a nested object where we have common beginning points as the first key and then the rest of the url as the value and so on
// example: set = {'www.' : ['google.com', 'youtube.com'],
                //  'repl.it' : ['languages.com', 'coding.com']}


// SOLUTION 2: separate out shared prefixes using a trie
// create a nested object where each map has keys of just one character and the end of a word is indicted by a '*'
// a trie is a type of tree where each character in a string corresponds to a node
// to check if a string is in a trie, descend from root to leaf, checking for a node in the tree corresponding to each character in the string

// https://www.interviewcake.com/question/javascript/compress-url-list?course=fc1&section=system-design
// TIME: O(26^n) for all URLs of length n or fewer
class Trie {
  constructor() {
    this.root = {};
  }

  addWord(word) {
    let newWord = false;
    let currentWord = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!currentWord.hasOwnProperty(char)) {
        newWord = true;
        currentWord[char] = {};
      }
      currentWord = currentWord[char];
    }

    if (!currentWord.hasOwnProperty('end of word')) {
      newWord = true;
      currentWord['end of word'] = {}
    }

    return newWord;
    
  }
}

