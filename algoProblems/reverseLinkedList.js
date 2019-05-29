// PROBLEM: reverse a linked list
class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

l1 = new LinkedListNode(8);
l2 = new LinkedListNode(4);
l1.next = l2;


// APPROACH 1: go through the entire list and reverse the direction of the pointers

  // this will store the value of the current head to be used as the previous head
  let oldHead = null;
  let head = l1;
  while (head) {
    // store the next node to be used as the new head
    let nextNode = head.next;

    // set the next pointer of the newNode to equal the oldHead
    head.next = oldHead;
  
    // set the oldHead to be the current head
    oldHead = head;

    // set the head to be the nextNode
    head = nextNode;
  }



console.log(l2)
