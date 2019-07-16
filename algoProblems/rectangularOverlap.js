// PROBLEM: Write a function to find the rectangular intersection of two given love rectangles.
//rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.
// They are defined as objects ↴ like this:
//   const myRectangle = {
//   // Coordinates of bottom-left corner
//   leftX: 1,
//   bottomY: 1,

//   // Width and height
//   width: 6,
//   height: 3,
// };
// Your output rectangle should use this format as well.

// APPROACH: calculate the overlap in the x direction and the y direction
// for the bottom x coordinate, this is equal to the maximum of the 1st rectangle bottom left x and the 2nd rect bottom left x
// to find the upper x coordinate, this is the minimum of the 1st rectangle right x and 2nd rectangle left leftX
// the same is for the y
// can make the below more molular by making a helper function to calculate the x and y overlap
// TIME: O(1) constant because same calculations for every rectangle
// SPACE: O(1) same amount of space to store the measurements


function findRectangularOverlap(rect1, rect2) {
  let leftX = null;
  let bottomY = null;
  let width = null;
  let height = null;

  // calculate the x overlap
  let rect1LeftX = rect1.leftX;
  let rect1RightX = rect1LeftX + rect1.width;
  let rect2LeftX = rect2.leftX;
  let rect2RightX = rect2LeftX + rect2.width;

  leftX = Math.max(rect1LeftX, rect2LeftX);
  width = Math.min(rect1RightX, rect2RightX) - leftX;
 
  // calculate the y overlap
  let rect1BottomY = rect1.bottomY;
  let rect1UpperY = rect1BottomY + rect1.height;
  let rect2BottomY = rect2.bottomY;
  let rect2UpperY = rect2BottomY + rect2.height;

  bottomY = Math.max(rect1BottomY, rect2BottomY);
  height = Math.min(rect1UpperY, rect2UpperY) - Math.max(rect1BottomY, rect2BottomY);

  // if the width or the height are === 0 or < 0 that means there wasn't an overlap so return null
  if (width <= 0 || height <= 0) {
    leftX = null;
    bottomY = null;
    width = null;
    height = null;
  }

  return { leftX, bottomY, width, height };
}



// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a);
  const objectB = JSON.stringify(b);
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
