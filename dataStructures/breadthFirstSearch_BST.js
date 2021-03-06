// Breadth first search is level order graph traversal utilizing a queue
// Time complexity: O(n) - visiting a node (reading its data and enqueue) is constant and we visit each node once
// Space: O(w) where w is the width of the tree in other words O(2^h) where h is the height of the tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE APPROACH
function breadthFirstSearch(root) {
  if (root.value === null) {
   	return;
  }
  
  // first take the root and add it onto the queue
  let queue = [root];
  
  while (queue.length > 0) {
 
    // get the node at the front of the queue and process it
    let nodeToProcess = queue.shift();
    console.log(nodeToProcess.val);
    
    // after you process it, add it's children to the queue
    if (nodeToProcess.left) {
      queue.push(nodeToProcess.left);
    }
    if (nodeToProcess.right) {
      queue.push(nodeToProcess.right);
    }
    // repeat the above steps until the queue is empty
  }
}

// RECURSIVE APPROACH
function breadthFirstSearch(root, queue=[root]) {
  let nodeToProcess = queue.shift();

  if (!nodeToProcess) return;

  console.log(nodeToProcess.val);
  
  if (nodeToProcess.left) {
    queue.push(nodeToProcess.left);
  }
  if (nodeToProcess.right) {
    queue.push(nodeToProcess.right);
  }

  breadthFirstSearch(nodeToProcess, queue)
}

const root = new Node(5);
root.left = new Node(10);
root.left.left = new Node(17);
root.left.right = new Node(3);
root.right = new Node(8);

breadthFirstSearch(root);
