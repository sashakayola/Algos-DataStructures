// PROBLEM: https://www.geeksforgeeks.org/find-smallest-number-with-given-number-of-digits-and-digit-sum/
// APPROACH: greedy approach where we start from the right of our final number, and keep on incrementing the digits in each place until we reach the target sum
// ae for example smallestNum(20,3) we create a number 100
// starting from the far right, we increment the number to 101. this is still not the target sum. then we increment to 102. and so on until we reach 109. 1 + 0 + 9 is still less than 20. so we move on to the next left. we increment it until we reach 199. the sum is 19 which is still less than 20. finally we get to the first index where we increment that by 1 so now we have 299 (the lowest possible digit)
// TIME: O(9n) => O(n) to iterate through all the places in the array
// SPACE: O(n) where n is the number of digits

function smallestNum(sum, numDigits) {
  let digits = new Array(numDigits).fill(0);
  digits[0] = 1;
  let currentSum = 1;
  let currentIndex = digits.length - 1;

  while (currentSum !== sum) {
    let difference = sum - currentSum;
    if (difference < 10) {
      digits[currentIndex] += difference;
      break;
    } 
    else {
      while (digits[currentIndex] < 9 && currentSum !== sum) {
        digits[currentIndex]++;
        currentSum ++;
      }
    }
    currentIndex--;
  }

  return Number(digits.join(''));
}

// console.log(smallestNum(20, 3)) // 299
console.log(smallestNum(9, 2)) // 18
console.log(smallestNum(20, 4)) // 1199
console.log(smallestNum(7, 8)) // 10000006
