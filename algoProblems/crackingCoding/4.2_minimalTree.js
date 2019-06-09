// PROBLEM: Given a sorted (increasing order) array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal height

// APPROACH: to create a binary search tree with minimal height, start the root node as the midpoint of the array
// the left of the root will be everything in the array to the left and the right will be everything in the array to the right of that mid
// recursively implement this as you create BST to establish the root as the mid value and the left and right

// 1. Insert into the tree the middle element of the array.
// 2. Insert (into the left subtree) the left subarray elements.
// 3. Insert (into the right subtree) the right subarray elements.
// 4. Recurse. 

function minimalBST(arr) {
  return minimalBSTFunc(arr, start = 0, end = arr.length - 1)
}

function minimalBSTFunc(arr, start = 0, end = arr.length - 1) {
  if (end < start) return null;

  let mid = (start + end) / 2;
  let node = new Node(arr[mid]);

  node.left = minimalBSTFunc(arr, start, mid - 1);
  node.right = minimalBSTFunc(arr, mid + 1, end);

  return node;
}
