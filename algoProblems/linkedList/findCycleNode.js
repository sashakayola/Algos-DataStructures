class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function containsCycle(head) {
  let slow = head;
  let fast = head;

  // while fast hasn't reached the end, and there is a next value (need to know if there is a next value otherwise in the code below, doing fast.next.next would be an error (can't find next of null))
  while (fast !== null && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // to find the node where the cycle begins, move the fast back to the head
      // if the slow and the head are at the same place, return that index
      // if not, then move up both by 1 until they reach the same place
      return findCycle(head, slow)
    }
  }

  return 'no cycle';
}

function findCycle(fast, slow) {
  if (fast === slow) {
    return fast.value;
  }
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
    if (fast === slow) {
      return fast.value;
    }
  }
}

// Tests

// let desc = 'linked list with no cycle';
// let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
// containsCycle(nodes[0]); // no cycle

// desc = 'cycle loops to beginning';
// nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
// nodes[3].next = nodes[0];
// containsCycle(nodes[0]); // 1

// desc = 'cycle loops to middle';
// nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
// nodes[4].next = nodes[2];
// containsCycle(nodes[0]); // 3

// desc = 'two node cycle at end';
// nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
// nodes[4].next = nodes[3];
// containsCycle(nodes[0]); // 4

// desc = 'empty list';
// containsCycle(null);

// desc = 'one element linked list no cycle';
// let firstNode = new LinkedListNode(1);
// containsCycle(firstNode);

// desc = 'one element linked list cycle';
// firstNode = new LinkedListNode(1);
// firstNode.next = firstNode;
// containsCycle(firstNode);

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
