// PROBLEM: Write a function kth_to_last_node() that takes an integer k and the head_node of a singly-linked list, and returns the kth to last node in the list
// NOTE: both approaches below has surprisingly the same time complexity!!!

// ASIDE FROM INTERVIEW CAKE: Both approaches use O(n)O(n) time and O(1)O(1) space.
// But the second approach is fewer steps since it gets the answer "in one pass," right? Wrong.
// In the first approach, we walk one pointer from head to tail (to get the list's length), then walk another pointer from the head node to the target node (the kkth to last node).
// In the second approach, rightNode also walks all the way from head to tail, and leftNode also walks from the head to the target node.

// So in both cases, we have two pointers taking the same steps through our list. The only difference is the order in which the steps are taken. The number of steps is the same either way.
// However, the second approach might still be slightly faster, due to some caching and other optimizations that modern processors and memory have.

// Let's focus on caching. Usually when we grab some data from memory (for example, info about a linked list node), we also store that data in a small cache right on the processor. If we need to use that same data again soon after, we can quickly grab it from the cache. But if we don't use that data for a while, we're likely to replace it with other stuff we've used more recently (this is called a "least recently used" replacement policy).

// Both of our algorithms access a lot of nodes in our list twice, so they could exploit this caching. But notice that in our second algorithm there's a much shorter time between the first and second times that we access a given node (this is sometimes called "temporal locality of reference"). Thus it seems more likely that our second algorithm will save time by using the processor's cache! But this assumes our processor's cache uses something like a "least recently used" replacement policy—it might use something else. Ultimately the best way to really know which algorithm is faster is to implement both and time them on a few different inputs!

// Bonus
// Can we do better? What if we expect nn to be huge and kk to be pretty small? In this case, our target node will be close to the end of the list...so it seems a waste that we have to walk all the way from the beginning twice.

// Can we trim down the number of steps in the "second trip"? One pointer will certainly have to travel all the way from head to tail in the list to get the total length...but can we store some "checkpoints" as we go so that the second pointer doesn't have to start all the way at the beginning? Can we store these "checkpoints" in constant space? Note: this approach only saves time if we know that our target node is towards the end of the list (in other words, nn is much larger than k).

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// APPROACH 1: naive approach of going through the entire linked list to find the length of the list
// then go through the list again to return the kth to last node
// TIME: O(n)
// SPACE: O(1) constant
function kthToLastNode2(k, head) {
  let lengthOfList = 0;
  let headOfList = head;

  while (head) {
    lengthOfList++;
    head = head.next
  }

  if (k > lengthOfList || k === 0) {
    throw new Error;
  }

  for (let i = 0; i < lengthOfList - k; i++) {
    headOfList = headOfList.next;
  }
 
  return headOfList;
}

// APPROACH 2: using a stick approach. we define a stick of length k and move it along the linked list
// once the end of the stick the end of the linked list, we know the beginning of the stick is where k is
// TIME: O(n)
// SPACE: O(1) constant
function kthToLastNode(k, head) {
  if (k === 0) {
    throw new Error;
  }

  // create a stick where the start of the stick is at the end and the end of the stick is at start + k
  let startOfStick = head;
  let endOfStick = head;

  for (let i = 0; i < k; i++) {
      endOfStick = endOfStick.next;
      if (endOfStick === undefined) {
        throw new Error;
      }
  }

  // go through the linked list moving up the stick by one as we go
  // once our stick has reached the end of the linked list, we know the start of the stick is where the kth to last node is
  while (endOfStick) {
    startOfStick = startOfStick.next;
    endOfStick = endOfStick.next;
  }

  return startOfStick;
}

















// Tests

let desc = 'first to last node';
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
let actual = kthToLastNode(1, nodes[0]);
let expected = nodes[3];
assertEquals(actual, expected, desc);

desc = 'second to last node';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(2, nodes[0]);
expected = nodes[2];
assertEquals(actual, expected, desc);

desc = 'first node';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(4, nodes[0]);
expected = nodes[0];
assertEquals(actual, expected, desc);

desc = 'k greater than linked list length';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const fifthFromLast = () => (kthToLastNode(5, nodes[0]));
assertThrows(fifthFromLast, desc);

desc = 'k is zero';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const zeroFromLast = () => (kthToLastNode(0, nodes[0]));
assertThrows(zeroFromLast, desc);

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

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
