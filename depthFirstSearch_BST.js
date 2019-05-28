class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// breadthFirstSearch is level order graph traversal utilizing a queue
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
		if (nodeToProcess.left !== null) {
      queue.push(nodeToProcess.left);
    }
    if (nodeToProcess.right !== null) {
      queue.push(nodeToProcess.right);
    }
    // repeat the above steps until the queue is empty
  }
}

const root = new Node(5);
root.left = new Node(10);
root.left.left = new Node(17);
root.left.right = new Node(3);
root.right = new Node(8);

breadthFirstSearch(root);
