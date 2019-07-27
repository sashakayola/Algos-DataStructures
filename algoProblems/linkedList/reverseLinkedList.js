// PROBLEM: reverse a linked list in-place
// Your function should return the new head of the list.

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// APPROACH1 (in place): 
// always remember to declare three variable. current for the head. previous and next as null! and set the while loop to check that the current exists
// return the previous which will point to the new head
// iterate until the current node is node, so the previous will be the new head
// TIME: O(n)
// SPACE: O(1) in place (note this destroys the input list)
function reverse1(node) {
 let current = node;
 let previous = null;
 let next = null;

 // while we haven't reached the end of the linked list ae the next isn't null
 while (current) {
   // make sure to keep track of the next value before you reassign current.next to be the previous
  next = current.next;
  current.next = previous;
  previous = current;
  current = next;
 }

 return previous;
}

// APPROACH2 (to reverse linked list out of place)
// iterate through the linked list and store all the nodes in an array until we reach the end
// make a new array by popping nodes from the previous nodes array


function reverse2(node) {
  let newHead = null;
  let previousNodes = [];

  // keep a reference to the current node
  let current = node;
  // until we reach the end of the linked list, push the nodes to the previous nodes array
  while (current) {
    previousNodes.push(current);
    current = current.next;
  }

  // the new head will now the last thing in the previous Nodes array
  newHead = previousNodes.pop() || null; // return null for an empty linked list
  // set the current to the be the new head
  current = newHead;
  
  // until we reach null, set the set for each current to be the last thing in the previousNodes array
  while (current) {
    current.next = previousNodes.pop();
    current = current.next
  }

  return newHead;
}

// APPROACH 3 (to reverse linked list out of place recursively)

function reverse(node, parent) {
  var result = parent || null;

  if (node) {
    let child = node.next;
    node.next = parent;

    result = reverse(child, node);
  }

  return result;
}




// Tests

let desc = 'short linked list';
let nodes = valuesToLinkedListNodes([1, 2]);
let reversedList = reverse(nodes[0]);
assertEquals(isListReversed(reversedList, nodes), true, desc);

desc = 'long linked list';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5, 6]);
reversedList = reverse(nodes[0]);
assertEquals(isListReversed(reversedList, nodes), true, desc);

desc = 'one element linked list';
const node = new LinkedListNode(1);
reversedList = reverse(node);
assertEquals(node.value === reversedList.value && node.next === reversedList.next, true, desc);

desc = 'empty linked list';
reversedList = reverse(null);
assertEquals(reversedList, null, desc);

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function isListReversed(list, originalNodes) {
  let i = originalNodes.length - 1;
  while (list != null && i >= 0) {
    if (originalNodes[i] != list) {
      return false;
    }
    list = list.next;
    i--;
  }
  return list == null;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
