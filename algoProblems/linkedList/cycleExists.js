// PROBLEM: determine if a single linked list has a cycle

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// APPROACH 1 (best approach): TORTIOSE AND HARE
// have a slow runner moving a pace of one node per iteration and a fast runner moving two nodes per iteration
// there is a cycle if the slow and fast runner ever end up at the same spot
// this approach will work for any step size for the fast runner (eventually it will meet or surpass the slow runner https://stackoverflow.com/questions/5130246/why-increase-pointer-by-two-while-finding-loop-in-linked-list-why-not-3-4-5)
// TIME: O(n)
// SPACCE: O(1)
function containsCycle(head) {
  let slow = head;
  let fast = head;

  // while fast hasn't reached the end, and there is a next value (need to know if there is a next value otherwise in the code below, doing fast.next.next would be an error (can't find next of null))
  while (fast !== null && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// APPROACH 2: HASHING
// TIME: O(n)
// SPACCE: O(n)
function containsCycle2(head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    else {
      set.add(head)
      head = head.next;
    }
  }
  return false;
}


// Tests

let desc = 'linked list with no cycle';
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
assertEquals(containsCycle(nodes[0]), false, desc);

desc = 'cycle loops to beginning';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
nodes[3].next = nodes[0];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'cycle loops to middle';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[2];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'two node cycle at end';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[3];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'empty list';
assertEquals(containsCycle(null), false, desc);

desc = 'one element linked list no cycle';
let firstNode = new LinkedListNode(1);
assertEquals(containsCycle(firstNode), false, desc);

desc = 'one element linked list cycle';
firstNode = new LinkedListNode(1);
firstNode.next = firstNode;
assertEquals(containsCycle(firstNode), true, desc);

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
