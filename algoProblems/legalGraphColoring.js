// PROBLEM: Given an undirected graph with maximum degree D (ae maximum number of neighbors any node has), 
// find a legal graph coloring using at most D+1 colors

// APPROACH: iterate through the graph. for each node, record all the colors of its neighbors. assign that node the first available color
that it's neighbors don't have.
// This is a greedy approach
// TIME: O(m + n) where n is the number of nodes and m is the number of edges

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {

  graph.forEach(node => {
    
    // if a node has a neighbor of itself, legal coloring not possible
    if (node.neighbors.has(node)) {
      throw new Error('legal color not possible for node with loop with itself')
    }

    // define all illegal colors ae all the colors of that nodes neighbors
    let illegalColors = new Set();

    // find that node's neighbors and for each neighbor, find its color, and add it to the set of illegal colors
    let neighbors = node.neighbors;
    neighbors.forEach((eachNeighbor) => {
      let color = eachNeighbor.color;
      illegalColors.add(color);
    })

    // assign the first legal color not in the illegalColors set
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];

      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  })
}

const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

let graph = [];
{
  const nodeA = new GraphNode('A');
  const nodeB = new GraphNode('B');
  const nodeC = new GraphNode('C');
  const nodeD = new GraphNode('D');
  nodeA.neighbors.add(nodeB);
  nodeB.neighbors.add(nodeA);
  nodeB.neighbors.add(nodeC);
  nodeC.neighbors.add(nodeB);
  nodeC.neighbors.add(nodeD);
  nodeD.neighbors.add(nodeC);
  graph = [nodeA, nodeB, nodeC, nodeD];
}
colorGraph(graph, colors); // true
