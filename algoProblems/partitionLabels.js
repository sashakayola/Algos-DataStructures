// PROBLEM: A string S of lowercase letters is given. Partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts
// TIME: O(nlogn) - iterate through the letters in the string to add to the object the first time we see each object and the last time and sort based on the first time each letter is seen
// SPACE: O(n) need to store each letter in the object

// APPROACH: take the string and iterate through it once; create a hash table (array of objects) with each letter from the string being the key, and the values being an array with the first time the letter appears and the last time it appears
// sort the object by the first time each letter is seen
// merge the objects by the last time each was seen (similar to merging meetings problem)
// find the length of all the merged objects that remain and return those lengths

function partition(str) {
  let partitions = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (partitions[letter]) {
      partitions[letter][1] = i;
    } else {
      partitions[letter] = [i,i];
    }
  }

  // sort the arrays in the partitions by the first time you see the letter
  let arrayToSort = [];
  for (let key in partitions) {
    arrayToSort.push(partitions[key]);
  }

  let sortedArray = arrayToSort.sort((a, b) => a[0] - b[0]);
 
  // go through the sortedArray and merge the objects based on the last time each letter was seen
  let mergedLetters = [sortedArray[0]];

  for (let i = 1; i < sortedArray.length; i++) {
    let lastSeenInMerged = mergedLetters[mergedLetters.length-1][1];
    let currentFirstSeen = sortedArray[i][0];
    let currentLastSeen = sortedArray[i][1];
    if (currentFirstSeen < lastSeenInMerged ) {
      mergedLetters[mergedLetters.length-1][1] = Math.max(lastSeenInMerged, currentLastSeen);
    } else {
      mergedLetters.push(sortedArray[i]);
    }
  }

  // now that we have merged all the letters indexes, go through the mergedLetters array and caculate all the lengths of the arrays
  let lengths = [];
  for (let i = 0; i < mergedLetters.length; i++) {
    let currentLength = mergedLetters[i][1] - mergedLetters[i][0];
    lengths.push(currentLength + 1)
  }

  return lengths;
}

console.log(partition('ababcbacadefegdehijhklij')) // [9,7,8]
