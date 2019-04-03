/*
SELECTION SORT
- takes in a list of integers
- iterates once through list to find largest element
- moves largest element to end of list
- repeats this on the unsorted portion

- Time complexity: O(n^2)
- Space complexity: in-place comparison sort, O(n)
*/

let array = [1, 5, 9, 2, 7, 4]

function selectionSort(arr) {
  let lastUnsorted = arr.length
  for (let i = 0; i < lastUnsorted; i++) {
    let largest = findLargest(arr.slice(0, lastUnsorted))
    let indexOfLargest = arr.indexOf(largest)
    arr.splice(indexOfLargest, 1)
    arr.splice(lastUnsorted - 1, 0, largest)
    lastUnsorted--
  }
  return arr
}

function findLargest(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i]
    if (currentElement > largest) {
      largest = currentElement
    }
  }
  return largest
}

console.log(selectionSort(array))
