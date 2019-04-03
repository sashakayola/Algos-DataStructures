/*
BUBBLE SORT
- takes in a list of integers
- go through the array and swap adjacent pairs so each pair is in the right order
- larger (or smaller elements) will bubble up to the top of the list
- not great to use except in cases where maybe only a few elements are unsorted and are almost in their right position

- Time complexity: O(n^2)
- Space complexity: in-place comparison sort, O(n)
*/

let array = [10, 5, 4, 9, 2, 7, 1]

function bubbleSort(arr) {
  let sorted = false
  // each iteration, highest number will bubble up so don't need to swap those elements any longer
  let lastUnsorted = arr.length - 1

  while (!sorted) {
    sorted = true
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp
        sorted = false
      }
    }
    lastUnsorted--
  }
  return arr
}

console.log(bubbleSort(array))
