// APPROACH 1: multiple conditionals
// TIME: O(n)
// SPACE: O(1)
var fizzBuzz = function(n) {
    let nums = [];
    
    // remember to start the for loop at 1 an go until i <= n
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            nums.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            nums.push('Fizz');
        }
        else if (i % 5 === 0) {
            nums.push('Buzz');
        }
        else nums.push(String(i))  
    }
    
    return nums;
};

// APPROACH 2: less conditionals by concatenating strings (fastest approach)
// TIME: O(n)
// SPACE: O(1)
var fizzBuzz2 = function(n) {
    let nums = [];
    
    for (let i = 1; i <= n; i++) {
        let numToString = '';
        if (i % 3 === 0) {
            numToString = 'Fizz';
        }
        if (i % 5 === 0) {
            numToString += 'Buzz';
        }
        numToString !== '' ? nums.push(numToString) : nums.push(String(i))
    }
    
    return nums;
};

// APPROACH 3: using a hash
// TIME: O(n)
// SPACE: O(1)
function fizzBuzz3(n) {
  let hash = {3: 'Fizz', 5: 'Buzz'};
  let nums = [];

  for (let i = 1; i <= n; i++) {
    let numToString = '';
    for (let key in hash) {
      if (i % key === 0) {
        numToString += hash[key];
      }
    }
    numToString === '' ? nums.push(String(i)) : nums.push(numToString);
  }

  return nums;
}

fizzBuzz3(15)
