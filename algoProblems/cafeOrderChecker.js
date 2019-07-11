// PROBLEM: https://www.interviewcake.com/question/javascript/cafe-order-checker?course=fc1&section=array-and-string-manipulation
// given three arrays, one showing take out orders at a restaurant, one showing dine in orders and one showing the served orders (assume take out and dine in arrays are sorted by the order in which someone ordered and the served orders are in the order in which they dishes are served)
// given all three arrays, write a function to check that the service is first-come, first-served. All food should come out in the same order customers requested it.

// APPROACH: iterate through the servedOrders array. for each order, make sure it is the top order in takeOut or dineIn. If not, return false
// TIME: O(n) to go through the servedOrders array
// SPACE: O(1) because need pointers for the takeOut and dineIn arrays

// NOTE: the above problem assumes each customer order in servedOrders is unique. If there were potential repeats

function isFirstComeFirstServed(takeOut, dineIn, servedOrders) {
  let takeOutPointer = 0;
  let dineInPointer = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    let order = servedOrders[i];

    // if we haven't gone through all the takeOut orders
    if (takeOutPointer < takeOut.length && order === takeOut[takeOutPointer]) {
      takeOutPointer++;
    }
    // if we haven't gone through all the dineInOrders
    else if (dineInPointer < dineIn.length && order === dineIn[dineInPointer]) {
      dineInPointer++;
    }
    else {
      // if the order is not the first order in either the takeOut or dineIn array, then short circuit
      return false;
    }
  }
  
  return true;
}
