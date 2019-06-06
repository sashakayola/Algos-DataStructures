/ APPROACH: breadth first search (will find the shortest path)
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
      let path = [userB]
      while (!path.includes(userA)) {
        let lastThingInPath = path[path.length - 1];
        path.push(howWeReachedNodes[lastThingInPath])
      }

      // we then need to reverse the path (be found the path by going backwards from userB, to userB's parent, and then finding the parent of that parent until finally we reached userA (the original parent))
      return path.reverse();
    }
    else {
      // add things to the queue that haven't already been seen
      // ae go through all the user's neighbors, and if they haven't been visited, add them to the queue
      let neighbors = graph[firstUserInQueue];
      console.log('neighborssss', neighbors)
      neighbors.forEach((eachNeighbor) => {
        if (!visited.has(eachNeighbor)) {
          console.log('in here')
          queue.push(eachNeighbor)
          // add each node and its corresponding parent (as a value)
          howWeReachedNodes[eachNeighbor] = firstUserInQueue;
        }
      })
    }
  }
  return 'sorry not found'
}

const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott']
};



// console.log(shortestMessagePath(network, 'Jayden', 'Adam')) // ['Jayden', 'Amelia', 'Adam']
console.log(shortestMessagePath(network, 'Noam', 'Amelia'))
