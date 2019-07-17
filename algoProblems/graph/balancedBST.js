// PROBLEM: Write a function to see if a binary tree is "superbalanced". 
// A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
// A leaf node is a tree node with no children. It's the "end" of a path to the bottom, from the root.

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

// APPROACH: depth first search (iterative using a stack) where we note the depth of the leaves as we go. use DFS over BFS because it hits the leaves faster.
// we store the depths in an array. if at any point there are either more than 2 DIFFERENT depths in the array or the depths difference is greater than 1, than we return false
// TIME: O(n) at worst case we will have to look at all the leaves but we will do an iterative approach with BFS to avoid space on the callstack
// SPACE: O(n)

// Complexity explanation from interview cake: For time, the worst case is the tree is balanced and we have to iterate over all nn nodes to make sure.
// For the space cost, we have two data structures to watch: depths and nodes.
// depths will never hold more than three elements, so we can write that off as O(1).
// Because we’re doing a depth first search, nodes will hold at most d nodes where d is the depth of the tree (the number of levels in the tree from the root node down to the lowest node). So we could say our space cost is O(d).
// But we can also relate dd to nn. In a balanced tree, d is O(logbase2(n)). And the more unbalanced the tree gets, the closer d gets to n.
// In the worst case, the tree is a straight line of right children from the root where every node in that line also has a left child. The traversal will walk down the line of right children, adding a new left child to nodes at each step. 
// When the traversal hits the rightmost node, nodes will hold half of the n total nodes in the tree. Half n is O(n), so our worst case space cost is O(n).

function isBalanced(node) {
  let allDepths = []; // use an array to store the different depths. if there are more than 2 different depths or if there are exactly two depths but their difference is > 1, return false
  let stack = [];
  stack.push([node, 1])

  while (stack.length > 0) {
    let lastNode = stack.pop();
    let node = lastNode[0];
    let depth = lastNode[1];

    if (!node.left && !node.right) {
      // if this depth is not in the depths array
      if (!allDepths.includes(depth)) {
        allDepths.push(depth)
        if (allDepths.length > 2 || Math.abs(allDepths[0] -  allDepths[1]) > 1 && allDepths.length === 2) {
          return false;
        }
      }
    } else {
      if (node.left) {
        stack.push([node.left, depth + 1])
      }
      if (node.right) {
        stack.push([node.right, depth + 1])
      }
    }
  }
  return true;
}



// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both leaves at the same depth';
treeRoot = new BinaryTreeNode(3);
leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by one';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by two';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'three leaves total';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both subtrees superbalanced';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'both subtrees superbalanced two';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
leftNode.insertLeft(3);
leftNode.insertRight(7).insertRight(8);
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'only one node';
treeRoot = new BinaryTreeNode(1);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'linked list tree';
treeRoot = new BinaryTreeNode(1);
treeRoot.insertRight(2).insertRight(3).insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

