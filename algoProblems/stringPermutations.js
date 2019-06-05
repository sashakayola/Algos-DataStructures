// PROBLEM: given a string, return all the permutations of the letters in the string

// APPROACH 1: iterative. go through each letter in the string and for all existing permutations, add that letter to each position in the existing permutations
// for example, for abc we will first just have in our permuations a
// next, we add b to each position in the existing permutations (in this case a)
// we now have ab and ba
// next, we add c to each position in the existing permutations (ab and ba)
// finally, we get cab, acb, abc and cba, bca, bca
function allPermutations(str) {
  let permutations = [str[0]];
  
  for (let i = 1; i < str.length; i++) {
    let tempSet = [];
    let currentLetter = str[i];

    // go through all the strings in the permutations set and add the currentLetter into every possible spot
    // add each new permutation to the tempSet
    for (let j = 0; j < permutations.length; j++) {
      let currentPermutation = permutations[j];

      // another for loop to go through the current permutation and add in the currentLetter into every spot
      for (let k = 0; k <= currentPermutation.length; k++) {
        let newPermutation = currentPermutation.slice(0,k) + currentLetter + currentPermutation.slice(k);
        tempSet.push(newPermutation);
      }
    }
    permutations = tempSet;
    tempSet = [];
  }

  return permutations, permutations.length;
}
