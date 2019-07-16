// PROBLEM: delete a node from a linked list in constant time
// Delete a node from a singly-linked list, given only a variable pointing to that node.

// APPROACH: to do this in constant time and with only a reference to the node to delete, can just make the value of the node to delete the next value.
// TIME: O(1) constant
// SPACE: O(1) constant

// PROBLEMS WITH THIS APPROACH: First, it doesn't work for deleting the last node in the list. We could change the node we're deleting to have a value of null, but the second-to-last node's next pointer would still point to a node, even though it should be null. This could work—we could treat this last, "deleted" node with value null as a "dead node" or a "sentinel node," and adjust any node traversing code to stop traversing when it hits such a node. The trade-off there is we couldn't have non-dead nodes with values set to null. Instead we chose to throw an exception in this case.
// There are two potential side-effects:
// Any references to the input node have now effectively been reassigned to its next node. In our example, we "deleted" the node assigned to the variable b, but in actuality we just gave it a new value (2) and a new next! If we had another pointer to b somewhere else in our code and we were assuming it still had its old value (8), that could cause bugs.
// If there are pointers to the input node's original next node, those pointers now point to a "dangling" node (a node that's no longer reachable by walking down our list). In our example above, c is now dangling. If we changed c, we'd never encounter that new value by walking down our list from the head to the tail.

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(nodeToDelete) {
 // if this node has a next (it isn't the last node)
 if (nodeToDelete.next) {
  nodeToDelete.value = nodeToDelete.next.value;
  nodeToDelete.next = nodeToDelete.next.next;
 }

 // if the next node doesn't exist, we are at the last node. we can't use this method to delete the last node
 else {
   throw new Error;
   nodeToDelete.value = null;
   nodeToDelete.next = null;
 }
}

// Tests

let desc = 'node at beginning';
let head = new LinkedListNode(1);
let nodeToDelete = head;
appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(head);

let node = head;
assertEquals(2, node.value, desc);
node = node.next;
assertEquals(3, node.value, desc);
node = node.next;
assertEquals(4, node.value, desc);
assertEquals(node.next, null, desc);

desc = 'node in middle';
head = new LinkedListNode(1);
nodeToDelete = appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(nodeToDelete);

node = head;
assertEquals(1, node.value, desc);
node = node.next;
assertEquals(3, node.value, desc);
node = node.next;
assertEquals(4, node.value, desc);
assertEquals(node.next, null, desc);

desc = 'node at end';
head = new LinkedListNode(1);
appendToList(head, 2);
appendToList(head, 3);
nodeToDelete = appendToList(head, 4);

assertThrows(() => deleteNode(nodeToDelete), desc);

desc = 'node at end';
head = new LinkedListNode(1);
nodeToDelete = head;

assertThrows(() => deleteNode(nodeToDelete), desc);

function appendToList(head, value) {
  let tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
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
