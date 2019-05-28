/* jshint esversion: 6 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfRightLeaves(root) {
  if (root.value === null) {
   	return;
  }
  
  let sum = 0;
  // first take the root and add it onto the queue
  let queue = [root];
  
  while (queue.length > 0) {
 
    // get the node at the front of the queue and process it
    let nodeToProcess = queue.shift();
    
    // after you process it, add it's children to the queue
		if (nodeToProcess.left !== null) {
      queue.push(nodeToProcess.left);
    }
    if (nodeToProcess.right !== null) {
      queue.push(nodeToProcess.right);
      // check if the right node has any children; if not then add that value to the sum
      if (nodeToProcess.right.right === null && nodeToProcess.right.left === null) {
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
