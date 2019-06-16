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
