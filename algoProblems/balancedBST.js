// PROBLEM: Write a function to see if a binary tree is "superbalanced". 
// A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
// A leaf node is a tree node with no children. It's the "end" of a path to the bottom, from the root.

// APPROACH: depth first search where we note the depth of the leaves as we go. use DFS over BFS because it hits the leaves faster.
// we store the depths in an array. if at any point there are either more than 2 depths in the array or the depths difference is
// greater than 1, than we return false
// TIME: O(n) at worst case we will have to look at all the leaves but we will do an iterative approach with BFS to avoid space on the callstack
// SPACE: O(n)

