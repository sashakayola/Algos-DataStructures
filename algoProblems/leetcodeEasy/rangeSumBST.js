// PROBLEM: Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.
// https://leetcode.com/problems/range-sum-of-bst/

// BFS - FIFO with a queue
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    
    let queue = [];
    let visited = new Set();
    queue.push(root);
    visited.add(root);
    
    while (queue.length > 0) {
        let currentNode = queue.shift();
        if (currentNode.val >= L && currentNode.val <= R) {
            sum += currentNode.val;
        }
        if (currentNode.left && !visited.has(currentNode.left)) {
            queue.push(currentNode.left);
            visited.add(currentNode.left);
        }
        if (currentNode.right && !visited.has(currentNode.right)) {
            queue.push(currentNode.right);
            visited.add(currentNode.right)
        }
    }
    
    return sum;
};

// DFS - LIFO, recursive solution
var rangeSumBST2 = function(root, L, R) {
    let sum = 0;
    sum += DFS(root);
    
    function DFS(root) {
        if (!root) {
            return;
        }
    
        // in order traversal but it doesn't matter
        DFS(root.left);
         if (root.val >= L && root.val <= R) {
            sum += root.val;
        }
        DFS(root.right);
 
        return sum;
    }
    
    return sum;  
};

// DFS - LIFO iterative solution with a stack
// DFS - LIFO, recursive solution
var rangeSumBST3 = function(root, L, R) {
    let sum = 0;
    
    let stack = [];
    stack.push(root);
    let visited = new Set();
    visited.add(root);
    
    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (currentNode.val >= L && currentNode.val <= R) {
            sum += currentNode.val;
        }
        if (currentNode.left && !visited.has(currentNode.left)) {
            stack.push(currentNode.left);
            visited.add(currentNode.left);
        }
        if (currentNode.right && !visited.has(currentNode.right)) {
            stack.push(currentNode.right);
            visited.add(currentNode.right)
        }
    }
    
    return sum;  
};
