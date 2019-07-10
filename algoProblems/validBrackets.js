// PROBLEM: given a string of paren, see if the paren are valid
// APPROACH: use a stack to keep track of the paren. once we reach a valid pair, pop off the stack
// TIME: O(n) because iterate through the entire code 
// SPACE: O(n) in worst case (if only opening or closing brackets, would have to store entire code on the stack)

function isValid(code) {
  let stack = [];
  
  // create array with opposites
  let opposites = {
    '(':')',
    ')':'(',
    '}':'{',
    '{':'}',
    '[':']',
    ']': '['
  }
  
  for (let i = 0; i < code.length; i++) {
    let currentBracket = code[i];
    if (stack[stack.length - 1] === opposites[currentBracket]) {
      stack.pop();
    } else {
      stack.push(currentBracket)
    }
  }
  
  return stack.length === 0
}

// APPROACH 2 (better): another way to do is keeping track of all the openers in the stack only
// use a stack to keep track of all the opening brackets. for every closing bracket we encounter, if the last thing in the stack is not the corresponding closing bracket or the stack is empty, return false 
// we short circuit in the current closing doesn't correspond to the most recent opening OR if we try to add a closing bracket to an empty stack
function isValid2(code) {

  let openingStack = [];
  
  // create array with opposites for opening brackets
  let oppositeOpenings = {
    '(':')',
    '{':'}',
    '[':']',
  }
  
  for (let i = 0; i < code.length; i++) {
    let currentBracket = code[i];
    // if the current bracket is an opening, push onto the stack
    if (oppositeOpenings.hasOwnProperty(currentBracket)) {
      openingStack.push(currentBracket)

    // otherwise the current bracket is a closing bracket
    } else {
      // if so, if the opening stack is empty, return false
      if (openingStack.length === 0) {
        return false;
      } else {
        // if the openingStack's last bracket matches this closing, pop off the opening bracket
        if (oppositeOpenings[openingStack[openingStack.length - 1]] === currentBracket) {
          openingStack.pop();
        } else {
          // otherwise, the closing doesn't correspond to the last opening - return false early
          return false;
        }
      }
    }
  } 
   
  // need this line just in case we end up with this --> '[[]()'
  return openingStack.length === 0;
}

console.log(isValid2('()('))
