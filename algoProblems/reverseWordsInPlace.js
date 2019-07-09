// APPROACH: reverse the entire string first O(n). this is to get the words in the correct spot.
// reverse each word in the string again to make it read like a word O(n)
// TIME: O(n) because iterate through the message twice 2n --> O(n)
// SPACE: O(1) constant because reversing in place

function reverseWords(message) {
  let leftPointer = 0;
  let rightPointer = message.length - 1;
  
  // reverse all the character to get words in right order
  while (leftPointer < rightPointer) {
    let tempLeft = message[leftPointer]
    message[leftPointer] = message[rightPointer];
    message[rightPointer] = tempLeft;
    leftPointer ++;
    rightPointer --;
  }

  // now reverse each word so it reads like a word
  let firstPointer = 0;
  let lastPointer = 0;
  console.log(message)
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      lastPointer = i - 1;
      while (firstPointer <= lastPointer) {
        let firstTemp = message[firstPointer];
        message[firstPointer] = message[lastPointer];
        message[lastPointer] = firstTemp;
        firstPointer ++;
        lastPointer --;
      }
      firstPointer = i + 1;
    }
  }
  
  return message;
}

// APPROACH 2: same approach and time but with a helper function to do the reversal
function reverseWords2(message) {
  reverseWordsHelper(message, 0, message.length - 1)

  let firstPointer = 0;
  let lastPointer = 0;
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      lastPointer = i - 1;
      reverseWordsHelper(message, firstPointer, lastPointer)
      firstPointer = i + 1;
    }
  }
  
  return message;
}

function reverseWordsHelper(message, leftPointer, rightPointer) {
  while (leftPointer < rightPointer) {
    let tempLeft = message[leftPointer]
    message[leftPointer] = message[rightPointer];
    message[rightPointer] = tempLeft;
    leftPointer ++;
    rightPointer --;
  }
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords2(message).join('');
