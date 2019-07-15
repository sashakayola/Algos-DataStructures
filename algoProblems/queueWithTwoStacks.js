// PROBLEM: Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).
// Optimize for the time cost of m calls on your queue. These can be any mix of enqueue and dequeue calls.
// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

// APPROACH: keep a stack for enqueue and one for dequeue
// if the dequeue stack is empty and we want to dequeue, create it from the enqueue stack by popping and pushing (the first item in the enqueue should now be the last item in the dequeue)
// if we want to dequeue and the dequeue is populated, then take the last item from the deuqueue (pop)

// TIME: O(m) runtime for m calls
// Each enqueue is clearly O(1) time, and so is each dequeue when outStack has items. Dequeue on an empty outStack is order of the number of items in inStack at that moment, which can vary significantly.
// SPACE: O(m) where m is the number of items

// ASIDE FROM INTERVIEW CAKE: Notice that the more expensive a dequeue on an empty outStack is (that is, the more items we have to move from inStack to outStack), the more O(1)O(1)-time dequeues off of a non-empty outStack it wins us in the future. Once items are moved from inStack to outStack they just sit there, ready to be dequeued in O(1) time. An item never moves "backwards" in our data structure.

// We might guess that this "averages out" so that in a set of mm enqueues and dequeues the total cost of all dequeues is actually just O(m)O(m). To check this rigorously, we can use the accounting method, ↴
// The accounting method can be used for computing time complexity for things like "the cost of mm operations on this data structure."

// In the accounting method, you simply look at the time cost incurred by each item passing through the system instead of the time cost of each operation. AE counting the time cost per item instead of per enqueue or dequeue.

// So let's look at the worst case for a single item, which is the case where it is enqueued and then later dequeued. In this case, the item enters inStack (costing 1 push), then later moves to outStack (costing 1 pop and 1 push), then later comes off outStack to get returned (costing 1 pop).

// Each of these 4 pushes and pops is O(1) time. So our total cost per item is O(1). Our m enqueue and dequeue operations put m or fewer items into the system, giving a total runtime of O(m).

class QueueTwoStacks {
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }
  enqueue(item) {
    this.enqueueStack.push(item)
  }

  dequeue() {
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length > 0) {
        this.dequeueStack.push(this.enqueueStack.pop())
      }
    }
    if (this.dequeueStack.length === 0) throw Error;
    return this.dequeueStack.pop(); 
  }
}



// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
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
