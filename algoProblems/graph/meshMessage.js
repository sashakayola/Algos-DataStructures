// PROBLEM: given a network of users and nearby neighbors, find the shortest path from user A to user B 
// APPROACH: navigate the graph using breath first search
// for each user we see, keep track of the 'parent' user
// once we have found user B, reconstruct the path from user A to user B from the parent-child information we have stored
// step 1: BFS ---- step 2: backtrack from our BFS results to reconstruct path

// TIME: in worst case, go through the BFS on every node so this is n. 
// For each node, we are also going their each of their m neighbors
// then we also are recreating the path from at most n nodes, then we reverse it (another n)
// TOTAL TIME COMPLEXITY IS THEN O(N + M)
// SPACE: for each node, we are storing the queue of nodes to visit, the mapping of nodes to previous nodes and the final path so space is O(N)


// the problem below is an example of a mesh network: In a mesh network, data is sent from one node (here, a phone) to another directly, rather than through intermediate devices 
// (here, cell towers). Assuming enough devices are in range, mesh networks provide multiple possible transmission paths, making them reliable even if some devices have failed.

// We treat the input user network as a graph in adjacency list ↴ format. Then we do a breadth-first search ↴ from the sender, stopping once we reach the recipient.
// In order to recover the actual shortest path from the sender to the recipient, we do two things:
// during our breadth-first search, we keep track of how we reached each node, and
// after our breadth-first search reaches the end node, we use our object to backtrack from the recipient to the sender.
// To make sure our breadth-first search terminates, we're careful to avoid visiting any node twice. We could keep track of the nodes we've already seen in a set, but, to save space, we reuse the object we've already set up for recovering the path.

// Our solution has two main steps. First, we do a breadth-first search of the user network starting from the sender. Then, we use the results of our search to backtrack and find the shortest path.
// How much work is a breadth-first search?
// In the worst case, we'll go through the BFS loop once for every node in the graph, since we only ever add each node to nodesToVisit once (we check howWeReachedNodes to see if we've already added a node before). Each loop iteration involves a constant amount of work to dequeue the node and check if it's our end node. If we have nn nodes, then this portion of the loop is O(N).
// But there's more to each loop iteration: we also look at the current node's neighbors. Over all of the nodes in the graph, checking the neighbors is O(M), since it involves crossing each edge twice: once for each node at either end.
// Putting this together, the complexity of the breadth-first search is O(N+M).
// BFS and DFS are common enough that it's often acceptable to just state their complexity as O(N+M). Some interviewers might want you to derive it though, so definitely be ready in case they ask.
// What about backtracking to determine the shortest path? Handling each node in the path is O(1), and we could have at most N nodes in our shortest path. So, that's O(N)O(N) for building up the path. Then, it's another O(N) to reverse it. So, the total time complexity of our backtracking step is O(N).
// Putting these together, the time complexity of our entire algorithm is O(N+M).

// What about space complexity? The queue of nodes to visit, the mapping of nodes to previous nodes, and the final path ... they all store a constant amount of information per node. So, each data structure could take up to O(N) space if it stored information about all of our nodes. That means our overall space complexity is O(N).

function constructPath(howWeReachedNodes, userA, userB) {
  let path = [userB]
    while (!path.includes(userA)) {
      let lastThingInPath = path[path.length - 1];
      path.push(howWeReachedNodes[lastThingInPath])
    }

    // we then need to reverse the path (be found the path by going backwards from userB, to userB's parent, and then finding the parent of that parent until finally we reached userA (the original parent))
    return path.reverse();
}

function shortestMessagePath(graph, userA, userB) {
  // first look at a person and all of his direct neighbors
  let queue = [userA];

  // keep track of all the visited users; this will save time so we don't have to revisit users already seen and also will assure that we finish (for instance, if there is no path from userA to userB)
  let visited = new Set([userA]);
 
  let howWeReachedNodes = {};
  howWeReachedNodes[userA] = null;
 
  while (queue.length > 0) {
    let firstUserInQueue = queue.shift();

    // if we found the user, return the path!
    if (firstUserInQueue === userB) {
      
      // now reconstruct the path from the howWeReachedNodes array (it has nodes as keys with parent as value)
      return constructPath(howWeReachedNodes, userA, userB);
    }
  
    // add things to the queue that haven't already been seen
    // ae go through all the user's neighbors, and if they haven't been visited, add them to the queue
    let neighbors = graph[firstUserInQueue];

    neighbors.forEach((eachNeighbor) => {
      if (!visited.has(eachNeighbor)) {
        queue.push(eachNeighbor)
        visited.add(eachNeighbor) // visited set is redundant - can just check if it is in the howWeReachedNodes object
        // add each node and its corresponding parent (as a value)
        howWeReachedNodes[eachNeighbor] = firstUserInQueue;
      }
    })
    
  }
  return null;
}

const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel'],
  'Miguel'  : ['Amelia', 'Adam'],
  'Noam'    : ['Jayden', 'William'],
  'Omar'    : ['Min']
};


// console.log(shortestMessagePath(network, 'Jayden', 'Adam')) // ['Jayden', 'Amelia', 'Adam']
console.log(shortestMessagePath(network, 'Jayden', 'William')) // ['Jayden', 'Min', 'William']
