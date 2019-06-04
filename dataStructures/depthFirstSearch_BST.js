// Depth first search utilizes a stack to store ancestors of a node
// Time complexity: O(n) - visiting each node
// Space: O(h) where h is the height in other words O(logn) for a balanced tree and O(n) worst case if the tree is totally skewed

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// pre-order (visit root, traverse left, traverse right)
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

// in-order (traverse left, visit root, traverse right)
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

// post-order (traverse left, traverse right, visit root)
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

const root = new Node(5);
root.left = new Node(10);
root.left.left = new Node(17);
root.left.right = new Node(3);
root.right = new Node(8);

preorder(root);
inorder(root);
postorder(root);
