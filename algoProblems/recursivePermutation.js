// Problem: Generate all permutations of the input string recursively

// APPROACH: recursive approach
// If we're making all permutations for "cat," we take all permutations for "ca" and then put "t" in each possible position in each of those permutations. 
// TIME: O(n!) because there are n! permutations of a string
function getPermutations(string) {
  if (string.length <= 1) {
    console.log('returning', string)
    return new Set([string]);
  }

  let allCharsExceptLast = string.slice(0, string.length - 1);
  console.log('allCharsExceptLast', allCharsExceptLast)
  let lastChar = string[string.length - 1];
  console.log('lastChar', lastChar)

  let allPermsExceptLastChar = getPermutations(allCharsExceptLast);

  let allPermutations = new Set();

  allPermsExceptLastChar.forEach((eachPerm) => {
    // the below goes until <= eachPerm.length because need to add the last char to the very end of the word
    for (let i = 0; i <= eachPerm.length; i++) {
      const permutation = eachPerm.slice(0, i) + lastChar + eachPerm.slice(i)
      // console.log('permutation after adding last char: ', permutation)
      console.log('eachPerm: ', eachPerm);
      console.log('last char: ', lastChar)
      allPermutations.add(permutation);
      console.log('allPermutations', allPermutations)
    }
  })

  return allPermutations;
}


// Tests

// let desc = 'empty string';
// let input = '';
// let actual = getPermutations(input);
// let expected = new Set(['']);
// assert(isSetsEqual(actual, expected), desc);

// desc = 'one character string';
// input = 'a';
// actual = getPermutations(input);
// expected = new Set(['a']);
// assert(isSetsEqual(actual, expected), desc);

// desc = 'two character string';
// input = 'ab';
// actual = getPermutations(input);
// expected = new Set(['ab', 'ba']);
// assert(isSetsEqual(actual, expected), desc);

desc = 'three character string';
input = 'abc';
actual = getPermutations(input);
expected = new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
assert(isSetsEqual(actual, expected), desc);

function isSetsEqual(as, bs) {
  if (as.size !== bs.size) {
    return false;
  }
  for (let a of as) {
    if (!bs.has(a)) return false;
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
