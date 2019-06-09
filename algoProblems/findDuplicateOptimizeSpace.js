// PROBLEM: given an array of integers from 1-n with a size of n+1, find the first integer that appears at least twice. optimize for space.
// NOTE: in this problem, there is gauranteed to be a repeat because our array has size n+1 so for instance if we have number 1-7 with 8 slots, one of the numbers has to repeat

// APPROACH 1: brute force with O(n^2) runtime with two for loops
// APPROACH 2: using a set to record numbers that have already been seen, O(n) space in worst case with O(n) time

// APPROACH 3: sort the array (O(nlogn) time) and then iterate through and find the first number with a duplicate. If we use an in-place merge sort for instance, not using extra space to sort. O(1) space

function findDuplicate(arr) {
  let sorted = arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    let currentNum = arr[i];
    if (currentNum === arr[i+1]) {
      return currentNum;
    }
  }

  return -1;
}

// ***** APPROACH 4: approach 3 is good but this approach is also O(nlgn) time and O(1) space and doesn't amend the original input array
// for this approach, do a binary approach on the number of possible numbers, not by cutting the array in half
// for instance, you have an array with numbers 1-10. for the range of number 1-5, see how many numbers in the array fall between that. if 6 fall within 1-5, we know that one of them has to be duplicate. keep cutting the range of numbers in half until you get a range of 1
function findDuplicate2(arr) {
  let upper = arr.length - 1;
  let lower = 1;
  let mid = Math.floor(arr.length / 2);

  // while we don't have a range of possible numbers of 1 (ae the number that is duplicated)
  while (lower <= mid) {
    // find the number of unique items in the range lower to mid
    let uniqueNumbers = mid - lower + 1;
  
    // find how many numbers actually fall within lower to mid
    let numBetween = 0;
    arr.forEach(function (num) {
      if (num >= lower && num <= mid) {
        numBetween ++;
      }
    })
 
    // if the numberBetween are greater than the number of possible unique numbers, know that there is a duplicate in that range of numbers
    // if there is, redefine the possible range of numbers to half again and keep going until only one number left
    if (numBetween > uniqueNumbers) {
      upper = mid;
      mid = Math.floor(mid / 2);
    } 
    // else the number of integers that fit within the range is not more than the unique number of possible
    else {
      lower = mid + 1;
      mid = Math.floor((upper + mid) / 2);
    }
    numBetween = 0;
  }

  // return the only number left in the range of possibilities once the range is 1
  return lower;

}

// findDuplicate2([1, 2, 5, 5, 5, 5]) // 5
findDuplicate2([1, 2, 3, 2 ]) // 2
findDuplicate2([1,2,3,3,5,4,7,4,8]) // 8
