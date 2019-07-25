// PROBLEM: https://gist.github.com/MMintzer/4c1db673541939eeae986c140fd6e46a
// You are given a two-dimensiona array (matrix) of potentially unequal height and width containing only 0s and 1s. 
// Each 0 represents land, and each 1 represents part of a river. A river consists of any number of adjacent 1s forming 
// a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input 
// matrix. Note that these sizes do not need to be in any particular order.

// TIME: O(nm) where n i the height and m is the width
// SPACE: O(nm)

function riverSizes(arr)  {
  let sizes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        sizes.push(calcSize(i, j, arr));
      }
    }
  }

  return sizes;
}

function calcSize(row, col, arr) {
  arr[row][col] = 0;
  let size = 1;

  if (arr[row][col - 1] && arr[row][col - 1] === 1) {
    size += calcSize(row, col - 1, arr);
  }
  if (arr[row][col + 1] && arr[row][col + 1] === 1) {
    size += calcSize(row, col + 1, arr);
  }

  // for the below, can't check arr[row + 1][col] because this arr[row + 1] will throw an error if undefined
  if (arr[row + 1] && arr[row + 1][col] === 1) {
    size += calcSize(row + 1, col, arr);
  }
  
  return size;
}

console.log(riverSizes([
[1,0,0,1,0],
[1,0,1,0,0],
[0,0,1,0,1],
[1,0,1,0,1],
[1,0,1,1,0]
])) // [2, 1, 5, 2, 2]
