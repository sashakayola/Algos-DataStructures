// Problem: Write a function fib() that takes an integer n and returns the nth Fibonacci number

// fib is 0 1 1 2 3 5 8 13
// index  0 1 2 3 4 5 6 7
// calculate fib by taking the sum of the last two numbers
// NOTE: fib(n) = fib(n - 1) + fib(n - 2);

// ITERATIVE APPROACH (BEST APPROACH): for each index, add the fib number at that index to an array
// return the fib number at the nth array
// (better than recursive memo because callstack is still n space and memo is n space)
// this solution is not as elegant but we don't have a space issue on our callstack
// TIME: O(n)
// SPACE: O(1) constant
function fib(n) {
  // n is the index of the fib number that we want
  if (n === 0 || n === 1) return n;

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 2; i <= n; i++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current; 
  }

  return current;
}

// RECURSIVE APPROACH
// TIME: O(2^n) super slow! drawing out the problem it will look like a binary tree (each call to fib makes two more calls)
function fib2(n) {
  // base case is when n is 0 or 1
  if (n === 0 || n === 1) return n;
  return fib(n-1) + fib(n-2)
}

// FASTER RECURSIVE APPROACH WITH MEMOIZATION (less time to calculate everything on the call stack)
// initialize an object where we can store all the fib values we have calculated
let memo = {};
function fib3(n) {
  // base case is when n is 0 or 1
  if (n === 0 || n === 1) return n;

  if (!memo.hasOwnProperty(n)) {
    let result = fib(n-1) + fib(n-2);
    memo[n] = result;
  }
  return memo[n]
}

console.log(fib(7))
