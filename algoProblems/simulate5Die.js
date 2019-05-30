PROBLEM: given a 7 sided die, how can you simulate a 5 sided die (probabilities must be equal of 1-5)
TIME: O(n)

function r7() {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1)) + 1; 
}

function r5(){
  let sum = 0

  let count = 0
  while (count < 5){
     sum += r7()
     count++
  }

  let ans = sum % 5
  return ans + 1
}
