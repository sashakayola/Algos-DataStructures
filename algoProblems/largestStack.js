// PROBLEM: given the stack class, use it to implement a new class MaxStack with a method getMax() 
// that returns the largest element in the stack. getMax() should not remove the item.
// Implement the push, pop, and getMax methods
// APPROACH: create two stacks, one for the stack and one to just store the maxes of that stack
// in getMax(), simply peek at the last item in the maxesStack
// when you push an item, if it is greater than or equal to the last item in the maxes stack, add it to the maxesstack
// when you pop an item, if it the current max in the maxesStack, pop it off there as well
// TIME: O(1) for push, pop and getMax

class MaxStack {
  constructor() {
    this.newStack = new Stack();
    this.maxesStack = new Stack();
  }
  
  push(item) {
    this.newStack.push(item)
    let max = this.getMax();
    // if the item is greater than or equal to (need this in the case that
    // we have two of the same items in our stack for example, if we had [7,7],
    // we would want both of the 7s in the max stack)
    if (item >= max || max === null) {
      this.maxesStack.push(item);
    }
  }

  pop() {
    let max = this.maxesStack.peek();
    let oldItem = this.newStack.pop();
    if (max === oldItem) {
      this.maxesStack.pop();
    }
    return oldItem;
  }

  getMax() {
    return this.maxesStack.peek();
  }
}

class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}
