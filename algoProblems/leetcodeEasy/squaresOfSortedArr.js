// https://leetcode.com/problems/squares-of-a-sorted-array/
// APPROACH: keep track of where the first positive index starts
// find the squares of all the numbers and then sort the two arrays together
// TIME: O(n) to iterate over and find the squares
// SPACE: O(n) to store the new array
//     Since the array A is sorted, loosely speaking it has some negative elements with squares in decreasing order, then some non-negative elements with squares in increasing order.
//     For example, with [-3, -2, -1, 4, 5, 6], we have the negative part [-3, -2, -1] with squares [9, 4, 1], and the positive part [4, 5, 6] with squares [16, 25, 36]. 
//     Our strategy is to iterate over the negative part in reverse, and the positive part in the forward direction.

var sortedSquares = function(numbers) {
    let indexWherePositiveStarts = 0;
    
    // iterate over the numbers and square them. if we encounter a number that is positive (or 0) then we know that is where the positive numbers start
    for (let i = 0; i < numbers.length; i++) {
      if (indexWherePositiveStarts === 0 && numbers[i] >= 0) {
          indexWherePositiveStarts = i;
      } 
        numbers[i] *= numbers[i];
    }
    
  
    // merge the two sorted halves of the array
    let newArr = [];
    let leftArrPointer = indexWherePositiveStarts - 1;
    let rightArrPointer = indexWherePositiveStarts;
    
    while (leftArrPointer >= 0 && rightArrPointer <= numbers.length - 1) {
        if (numbers[leftArrPointer] <= numbers[rightArrPointer]) {
        newArr.push(numbers[leftArrPointer]);
        leftArrPointer--;
        } else {
        newArr.push(numbers[rightArrPointer]);
        rightArrPointer++;
        }   
    }

    // for any numbers left unmerged, add them in
    while (leftArrPointer >= 0) {
        newArr.push(numbers[leftArrPointer]);
        leftArrPointer--;
    }
     while (rightArrPointer <= numbers.length - 1) {
        newArr.push(numbers[rightArrPointer]);
        rightArrPointer++;
    }
    
    
    return newArr;
};
