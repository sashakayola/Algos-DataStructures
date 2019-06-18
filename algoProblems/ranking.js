// PROBLEM: given an array of numbers, find the total number of nums in the array where that num+1 is in the array
// for example if you are given [0,0,1] the result will be 2 because 0+1 = 1 and there are two zeroes

// TIME: O(n+m) time where n is the size of the initial array and m is the size of the hash
function ranking(arr) {
  let result = 0;
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1
    }
  }

  // go through the hash
  for (let key in hash) {
    if (hash[Number(key) + 1]) {
      result += hash[key];
    }
  }

  return result;
}

// ranking([3,4,3,0,2,2,3,0,0]) // 5
// ranking([-1,0,1,2]) // 1
// ranking([9,7,5]) // 0
// ranking([]) // 0
ranking([5,4]) // 1
