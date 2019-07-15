// PROBLEM: You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// APPROACH 1: brute force two nested for loops O(n)
function getProductsOfAllIntsExceptAtIndex2(intArray) {
  if (intArray.length <= 1) {
    throw new Error;
  }

  let allProducts = new Array(intArray.length).fill(1);

  for (let i = 0; i < intArray.length; i++) {
    let currentNum = intArray[i];
    for (let j = 0; j < allProducts.length; j++) {
      if (i !== j) {
        allProducts[j] *= currentNum;
      }
    }
  }
  
  return allProducts;
}

// APPROACH 2: three for loops (not nested). one for loop is to calculate the product after each number
// one for loop is to calculate the product before each number
// last for loop is to calculate the final product at each index

//The product of all the integers except the integer at each index can be broken down into two pieces:
//     1. the product of all the integers before each index, and
//     2. the product of all the integers after each index.

// TIME: O(n)
// SPACE: O(n) storing two arrays to keep track of the products forwards and backwards
function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length <= 1) {
    throw new Error;
  }

  let productsForwards = new Array(intArray.length).fill(1);
  let productsBackwards = new Array(intArray.length).fill(1);

  for (let i = 1; i < productsForwards.length; i++) {
    productsForwards[i] *= productsForwards[i-1] * intArray[i-1];
  }

  for (let i = productsBackwards.length - 2; i >= 0; i--) {
    productsBackwards[i] *= productsBackwards[i+1] * intArray[i+1];
  }

  for (let i = 0; i < productsForwards.length; i++) {
    productsForwards[i] *= productsBackwards[i];
  }
  
  return productsForwards;
}



// Tests

let desc = 'short array';
let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
let expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

desc = 'longer array',
actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

desc = 'array has one zero',
actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

desc = 'array has two zeros';
actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

desc = 'one negative number';
actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

desc = 'all negative numbers';
actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
