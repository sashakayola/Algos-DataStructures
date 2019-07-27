class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfRightLeaves(root) {
  let stack = [];
  let sum = 0;
  stack.push(root);
  
  while (stack.length) {
   let lastNode = stack.pop();
    if (lastNode.right) {
      sum += lastNode.right.val;
      stack.push(lastNode.right)
    }
    if (lastNode.left) {
      stack.push(lastNode.left)
    }
  }
  return sum;
}

// uncomment these for logging, they will affect tests
const root = new Node(5);
root.left = new Node(10);
root.left.left = new Node(17);
root.left.right = new Node(3);
root.right = new Node(8);

console.log(sumOfRightLeaves(root));
// 11
