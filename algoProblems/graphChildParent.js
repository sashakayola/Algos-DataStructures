// PROBLEM: given a graph, return an array with all the nodes that have no parent and also return an array with children that only have one parent

function graph(arr) {
 
  // TO GET THE NODES WITH NO PARENT
    // to find all the children nodes with no parent, first iterate through each array and add the values into a set

    let nodesWithNoParents = new Set();
    
    for (let i = 0; i < arr.length; i++) {
      let subArray = arr[i];
      nodesWithNoParents.add(subArray[0]);
      nodesWithNoParents.add(subArray[1]);
    }

    // then iterate through the array again and for each child we see, remove from the set
    // the remaining nodes in the set are the nodes with no children
    for (let i = 0; i < arr.length; i++) {
      let child = arr[i][1];
      nodesWithNoParents.delete(child);
    }

  // TO GET ALL THE NODES WITH ONLY ONE PARENT
    // iterate through the 1st index in each sub-array and add to a set. if we see the same number twice, delete from the set
    let nodesWithOneParent = new Set();
    for (let i = 0; i < arr.length; i++) {
      let child = arr[i][1];
      if (nodesWithOneParent.has(child)) {
        nodesWithOneParent.delete(child);
      }
      else nodesWithOneParent.add(child);
    }
    
  // transform both sets into arrays
  return [[...nodesWithNoParents], [...nodesWithOneParent]];
}
let arr = [[1, 3], [2, 3], [3, 6], [5, 6],[5, 7], [4, 5], [4, 8], [8, 9]]
console.log(graph(arr))
