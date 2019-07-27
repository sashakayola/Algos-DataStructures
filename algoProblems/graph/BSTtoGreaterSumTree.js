// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

// DFS - post order (from largest value in the array to the smallest)
// have an array where you keep track of the sums (essentially in this problem you just want to know the sum as you go)
// TIME: O(logn)
// SPACE: O(n)
var bstToGst = function(root, arr = [0]) {
    if (!root) {
       return;
    }
    
    bstToGst(root.right, arr);
    let lastValue = arr[arr.length - 1];
    arr.push(root.val + lastValue)
    root.val = arr[arr.length - 1];
    bstToGst(root.left, arr);
   
    return root;
};
