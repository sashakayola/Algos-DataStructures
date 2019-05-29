// Problem: given an array of Ids, find the id in the array that is unique 
// all the Ids in the array have duplicates except for one

// APPROACH 1: iterate through the array and for each Id, add it to a dictionary where the key is the id and the value is the number of times we have seen the id 
// the unique value will be the id that one that has a value equal to 1
// TIME COMPLEXITY: O(n) because we have to go through the entire array at worst case
// SPACE COMPLEXITY: O(n) because we are storing all the id's in a dictionary
function uniqueId(arr) {
  let tracker = {};

  for (let i = 0; i < arr.length; i++) {
    let currentId = arr[i];
    if (tracker[currentId] === 1) {
      tracker[currentId]++;
    }
    else {
      tracker[currentId] = 1;
    }
  }

  // go through the dictionary that kept track of the number of each id and find the one that only appeared once
  for (key in tracker) {
    if (tracker[key] === 1) {
      return Number(key);
    }
  }
}

// APPROACH 2: iterate through the array and for each Id, add it to a set if that number is not already in the set; if the number is in the set, remove the number. Return the number in the set at the end - this will be the unique number
// TIME COMPLEXITY: O(n) because we have to go through the entire array at worst case
// SPACE COMPLEXITY: O(n) because we are using a set to store the unique values
function uniqueId2(arr) {
  let set = [];

  for (let i = 0; i < arr.length; i++) {
    let currentId = arr[i];
    if (set.includes(currentId)) {
      set.splice(set.indexOf(currentId),1);
    }
    else {
      set.push(currentId)
    }
  }

  return set[0]
}

// APPROACH 3: use bit manipulation. specifically, XOR all the ids in the array
// XOR is commutative: A ^ B = B ^ A
// XOR is associative: (A ^ B) ^ C = A ^ (B ^ C)
// XORing with zero returns the number: A ^ 0 = A
// XORing something twice removes it: A ^ A = 0
// TIME COMPLEXITY: O(n) because we have to go through the entire array at worst case
// SPACE COMPLEXITY: O(1) constant time
function uniqueId3(arr) {
  let uniqueId = 0;
  arr.forEach(eachElement => uniqueId ^= eachElement);
  return uniqueId;
}

arrayOfIds = [1,2,3,2,3,1,5,7,4,7,5]
uniqueId(arrayOfIds) // 4
