/*
MERGE SORT
- divide and conquer sort
- takes in a array of integers
- divide the array in half, sort, and merge
- repeat this process recursively

- Time complexity: O(nlogn)
- Space complexity: O(n) - faster algorithm than for instance selectionSort and bubbleSort but takes more space
*/

let arrayExample = [1, 5, 9, 2, 7, 4, 3, 10]
let arrayExample2 = [2, 1]
let arrayExample3 = [1, 3, 7, 2, 1]

function mergeSort(arr) {
  // set a base case
  if (arr.length < 2) {
    return arr
  } else {
    let midWayPoint = Math.round(arr.length / 2)
    let leftHalf = arr.slice(0, midWayPoint)
    let rightHalf = arr.slice(midWayPoint)
    merge(mergeSort(leftHalf), mergeSort(rightHalf), arr)
  }
  return arr
}

function merge(leftArray, rightArray, array) {
  let leftArrayPointer = 0
  let rightArrayPointer = 0
  let arrayPointer = 0

  while (leftArrayPointer < leftArray.length && rightArrayPointer < rightArray.length) {
    if (leftArray[leftArrayPointer] < rightArray[rightArrayPointer]) {
      array[arrayPointer] = leftArray[leftArrayPointer]
      leftArrayPointer++
    } else {
      array[arrayPointer] = rightArray[rightArrayPointer]
      rightArrayPointer++
    }
    arrayPointer++
  }

  // check if any of the arrays are longer than the other and haven't been added into the original array
  while (leftArrayPointer < leftArray.length) {
    array[arrayPointer] = leftArray[leftArrayPointer]
    leftArrayPointer++
    arrayPointer++
  }
  while (rightArrayPointer < rightArray.length) {
    array[arrayPointer] = rightArray[rightArrayPointer]
    rightArrayPointer++
    arrayPointer++
  }

  // return the newly merged sorted array
  return array
}

console.log(mergeSort(arrayExample))
console.log(mergeSort(arrayExample2))
console.log(mergeSort(arrayExample3))
