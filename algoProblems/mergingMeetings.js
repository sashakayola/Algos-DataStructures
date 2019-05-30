// Problem: given an array of objects with start and end times, merge the array to consolidate the meeting times
// TIME: nlogn (sorting)

function mergeMeetings(arr) {

  // first sort the arr based on starting times
  let sortedArr = arr.sort((a,b) => a.startTime - b.startTime);

  // initialize an array that will the final merged mergeMeetings; initialize with the earliest meeting
  let merged = [sortedArr[0]];

  // go through the rest of the array and compare start and end times to add to the merged array
  for (let i = 1; i < sortedArr.length; i++) {
    // compare the merged to the current scheduled time
    let current = sortedArr[i];
    let currentStart = current.startTime;
    let currentEnd = current.endTime;
    let mergedEnd = merged[merged.length - 1].endTime;

    // if the current meeting overlaps with the last meeting time, use the later meeting time
    if (currentStart <= mergedEnd) {
      merged[merged.length-1].endTime = Math.max(mergedEnd, currentEnd);
    } else {
      // if the current start does not overlap with the last meeting's end time, then just add this meeting time to the end of the merged meeting time schedule
      merged.push(current);
    }
  }

  return merged;
}

let schedule = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

console.log(mergeMeetings(schedule))
