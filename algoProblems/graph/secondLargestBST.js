// PROBLEM: find the second largest value in a BST

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

// APPROACH 1: in-order traversal of the BST. store the values seen in a stack and return the second largest
// TIME: O(n) time to traverse through the whole tree
// SPACE: O(h) where h is the max height of the tree, O(lgn) space if we have a perfectly balanced tree and O(n) space if unbalanced
let stack = [];
function findSecondLargest(root) {

  if (!root) return;
  
  findSecondLargest(root.left);
  stack.push(root.value)
  findSecondLargest(root.right);
  
  if (stack.length === 1) return stack[0]
  else return stack[stack.length - 2]
}


// APPROACH 2: in a full tree, the second largest value will the parent node of the largest value
// to get the second largest in a case of a full tree, keep going right until you reach a right value of null
// and just take the value of the parent of the last node
// TIME: the below approach only requires one walkdown of our BST, so O(h) time where h is the height of the tree
// the time for this is logn if the tree is balance and O(n) if it is not
// SPACE: O(1) constant! we are not using a recursive solution so we save space on the callstack
// if we did the below with recursion, it would be O(h) space
function findSecondLargest(root) {
  // if our tree only has one node
  if (!root || (!root.left && !root.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }
  
  
  // note that Slargest below is a misnomer - it means if our tree is full, we return the second largest value in the entire tree
  // if our tree is not full as in, our largest element has a left subtree, then the second largest of the entire tree is the largest of the left subtree
  let Slargest = null;
  
  // keep going right to find the largest value
  // we only record the Slargest value once we determine our node has a right
  // if it doesn't, we keep the Slargest as the parent of the actual largest
  while (root.right) {
    Slargest = root.value;
    root = root.right;
  }
  
  // the below only happens if the largest value has a left subtree
  // if our root does have a left, set the new root to be the left node
  // the largest in this entire left node will be the second largest in the entire tree!
  root = root.left;
  while (root) {
    Slargest = root.value;
    root = root.right;
  }
  
  return Slargest;
}


// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'largest has a left child';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(findSecondLargest(treeRoot), 60, desc);

desc = 'largest has a left subtree';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);
assertEquals(findSecondLargest(treeRoot), 65, desc);

desc = 'second largest is root node';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(findSecondLargest(treeRoot), 50, desc);
