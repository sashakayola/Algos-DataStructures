// PROBLEM: Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
route between two nodes. (Cracking the coding, question 4.1)

// APPROACH: breadth first search starting at node a. Return true once you reach node b or if you traversed the entire graph, return false
// Mark visted nodes as visited to avoid cycles
// TIME: O(lgn)
// the advantages of using breadth first search in this problem (rather than DFS which is easier to implement with recursion)
// is that it will give you the shortest path
