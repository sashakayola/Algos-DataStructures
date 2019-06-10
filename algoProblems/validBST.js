// PROBLEM: Write a function to check that a binary tree is a valid binary search tree.

// APPROACH: do an in-order depth first search and make sure that the result is in-order (sorted)

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


function isBinarySearchTree(treeRoot, arr = []) {

  if (!treeRoot) {
    return;
  }
  
  isBinarySearchTree(treeRoot.left, arr);
  arr.push(treeRoot.value);
  isBinarySearchTree(treeRoot.right, arr);
  

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  
  return true;
}
