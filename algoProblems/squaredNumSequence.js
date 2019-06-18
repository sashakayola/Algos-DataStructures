// A sequence of numbers is made by squaring the digits of the previous number and adding them together
// the sequence ends when you repeat a number. Given the starting number return the length of the sequence
// For 4 the sequence is 4, 16, 37, 58, 89, 145, 42, 20, 4 and the length is 9.

function sequence(num) {

  let numbers = [];
  numbers.push(num)
  
  while (true) {
    
    let sum = 0;
    let numString = String(num)
    
    for (let i = 0; i < numString.length; i++) {
      sum += numString[i]**2;
    }
 
    if (numbers.includes(sum)) {
      return numbers.length + 1;
    }

    numbers.push(sum);
    num = sum;
  
  }
}

sequence(4)
