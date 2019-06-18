// PROBLEM: given a number n, return an array of n unique numbers where the sum of the numbers in the array will be equal to 0

function sumToZero(n) {
  let arr = [];
  let runningSum = 0;

  if (n === 2) { return [-1, 1]}

  for (let i = 0; i < n-1; i++) {
    arr.push(i);
    runningSum += i;
  }

  arr.push(0 - runningSum);
  return arr;
}

sumToZero(0);
