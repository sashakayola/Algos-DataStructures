// PROBLEM: Write a function that, given a sentence, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// APPROACH 1: keep a count of the parenthesis (for an opening paren, add 1 to the count. for a closing, subtract 1 from the count)
// to find the index of the closing paren associated with the opening indx, keep track of what the count was at that point
// once the count gets back to that point, you reached the index of the closing paren

function getClosingParen(str, openingIdx) {
  let goalCount = null;
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // if we reached our openingIdx, see what the count is. We know that this is the count we need to get back to to reach the corresponding closing brace
    if (i === openingIdx) {
      goalCount = count;
    }
    if (char === '(') {
        count++;
    }
    else if (char === ')') {
        count--;
    }
     if (goalCount === count) { 
      return i;
    }
    
  }

  throw new Error('No closing parenthesis :(');
}

// APPROACH 2: Better!! same as above but when count reaches 0, return the index of the closing parenthesis
// TIME: O(n) to go through the entire string at worst case
// SPACE: O(1) constant space in this case
// essentually using the count variable as a stack but because we are only storing the '(' characters
// instead of storing each character as a stack, we can store the number of items are stack is holding.
// this gets us from O(n) space to O(1) space

function getClosingParen2(str, openingIdx) {
  let count = 0;
  
  for (let i = openingIdx; i < str.length; i++) {
    let char = str[i];
   
    if (char === '(') {
        count++;
    }
    else if (char === ')') {
        count--;
    }
    if (count === 0) { 
      return i;
    }
    
  }

  throw new Error('No closing parenthesis :(');
}

getClosingParen('()()(())', 4) // 7
// getClosingParen2('()(()', 2) // 0
