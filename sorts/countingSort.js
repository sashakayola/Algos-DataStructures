// PROBLEM: Write a function that takes:
// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(nlgn) time.

// APPROACH: use counting sort because we have an upper limit on the scores (we know the range)
// We can build an array scoreCounts where the indices represent scores and the values represent how many times the score appears. Once we have that, we generate a sorted array of scores
// TIME: O(n) optimized for time but it cost us space...
// SPACE: O(n) space

function sortScores(scores, highestScore) {
  // first initialize an array that is highestScore length
  let bucketScores = new Array(highestScore).fill(0);

  // go through the scores array and for each score, add 1 to the bucket Scores array corresponding to that index
  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    bucketScores[score]++;
  }

  // go through the bucketScores and reconstruct the sorted scores array
  let sortedScores = [];
  for (let i = 0; i < bucketScores.length; i++) {
    let countOfScores = bucketScores[i];
    if (countOfScores > 0) {
      for (let j = 0; j < countOfScores; j++) {
        sortedScores.push(i);
      }
    }
  }

  return sortedScores;
}
