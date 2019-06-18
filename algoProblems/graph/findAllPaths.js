// Print all the paths in the tree from root to leaf

function findAllPaths(treeRoot) {
  let paths = []
  const nodes = [];
  nodes.push([treeRoot, [treeRoot.value]]);

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    let parentNode = nodePair[1];
 
    if (!node.left && !node.right) {
        paths.push(parentNode)
    } else {
      if (node.right) {
        newParentNode = parentNode.slice().concat(node.right.value)
        nodes.push([node.right, newParentNode]);
      }
      if (node.left) {
        newParentNode = parentNode.slice().concat(node.left.value)
        nodes.push([node.left, newParentNode]);
      }
    }
  }

  return paths;
}
