// PROBLEM: Given a directed, acyclic graph of N nodes.
// Find all possible paths from node 0 to node N-1, and return them in any order.
// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  
// graph[i] is a list of all nodes j for which the edge (i, j) exists.

// APPROACH: iterative DFS to get all the paths
// create a stack to push on nodes and their parent path
// for each node, if it doesn't have any children, add its parent path to the allPaths array
// if the node does have children, for each child, add its value to the stack as well as the new parent path (old parent + child value = newPath)
// TIME: 2^N for standard DFS
// SPACE: 2^N

var allPathsSourceTarget = function(graph) {
    // create a hash to store the value of the node and its children
    let hash = {};
    
    // go through the graph and add all the parents and children to the hash
    for (let i = 0; i < graph.length; i++) {
        let innerArray = graph[i];
        hash[i] = innerArray;
    }

    let allPaths = [];

    let stack = [];
    // push onto the stack the value of node (index in this case) and its parent or the origin
    stack.push([0,[0]])

    while (stack.length > 0) {
      let node = stack.pop();
      let value = node[0];
      let parent = node[1];
      // short hand for the above two lines is this: let [value, path] = stack.pop();
      let children = hash[value];

      if (children.length === 0) {
        // if you hit the end of a path, add the parent path to the allPaths array
        allPaths.push(parent)
      }
      else {
        for (let i = 0; i < children.length; i++) {
          stack.push([children[i], parent.concat(children[i])])
        }
      }
    }
    
    return allPaths;
};

allPathsSourceTarget([[1,2], [3], [3], []]) // [[0,1,3],[0,2,3]] 
