class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfRightLeaves(root) {
  if (!root.val) {
    return 0;
  }
  
  let sum = 0;
  let queue = [root];  // first take the root and add it onto the queue
  
  while (queue.length) {
    let nodeToProcess = queue.shift();  // get the node at the front of the queue
    
    // add it's children to the queue if it has children
    if (nodeToProcess.left) {
      queue.push(nodeToProcess.left);
    }
    if (nodeToProcess.right) {
      queue.push(nodeToProcess.right);
      // check if the right node has any children; if not then add that value to the sum
      if (!nodeToProcess.right.right && !nodeToProcess.right.left) {
       sum += nodeToProcess.right.val; 
      }
    }
    // repeat the above steps until the queue is empty
  }
  return sum;
}

const root = new Node(5);
root.left = new Node(10);
root.left.left = new Node(17);
root.left.right = new Node(3);
root.right = new Node(8);

console.log(sumOfRightLeaves(root));
