// PROBLEM: print the longest path in the tree with no repeating node values

// APPROACH: using iterative depth first search (using a stack)
// use a stack to keep track of its parent path (how this node was reached)
// if the node's value is already in its parent path, move on to the next path
// TIME: O(n) because looking at all nodes
// SPACE: constant O(d) where d is the depth of the tree (with a perfectly balanced binary tree, d = logn)
function findLongestPath(treeRoot) {
  let longest = 0;

  // add the root to the stack and its parent path as an array (just itself)
  // so in the stack is [root, parentPath]
  let stack = [];
  stack.push([treeRoot, [treeRoot.value]]);

  // while there are nodes in the stack to process
  while (stack.length > 0) {
    let [node, parentPath] = stack.pop();
    let depth = parentPath.length;
    
    // if the current node has a left and right subtree that are both null, see if the current depth (length of parentPath) is longer than the longestPath
    if (!node.left && !node.right) {
      if (depth > longest) longest = depth;
    }
    else {
      // if the node has a left value that is already in the parent path, move on (don't add the left to the stack to process)
      if (node.left && parentPath.includes(node.left.value)) {
        if (depth > longest) longest = depth;
      }
      // if the node has a left value that is NOT in the parent path, add the left node to the stack
      else if (node.left) {    
        stack.push([node.left, [...parentPath, node.left.value]]) 
      }
      // repeat above for the right node
      if (node.right && parentPath.includes(node.right.value)) {
        if (depth > longest) longest = depth;
      }
      else if (node.right) {
        stack.push([node.right, [...parentPath, node.right.value]])
      }
    }
  }

  return longest;
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// treeRoot = new BinaryTreeNode(1);
// leftNode = treeRoot.insertLeft(2);
// leftNode.insertLeft(1);
// leftNode.insertRight(2);
// rightNode = treeRoot.insertRight(2);
// leftNode = rightNode.insertLeft(4);
// leftNode.insertRight(1);
// findLongestPath(treeRoot); // 3 (1 --> 2 --> 4)

// treeRoot = new BinaryTreeNode(1);
// rightNode = treeRoot.insertRight(2);
// leftNode = rightNode.insertLeft(1);
// rightRightNode = rightNode.insertRight(1);
// rightRightNode.insertLeft(4);
// findLongestPath(treeRoot); // 2 (1 --> 2)

treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
leftNode.insertLeft(2);
leftRightNode = leftNode.insertRight(3);
leftRightLeftNode = leftRightNode.insertLeft(9)
rightNode = treeRoot.insertRight(2);
rightNode.insertLeft(4);
rightRightNode = rightNode.insertRight(1);
rightRightRightNode = rightRightNode.insertRight(8);
rightRightRightNode.insertLeft(10);
findLongestPath(treeRoot); // return should be 4 (1 --> 5 -- > 3 --> 9)
