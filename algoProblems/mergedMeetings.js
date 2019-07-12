// PROBLEM: given an array of objects with start times and end times, merge the objects together where they overlap (merging meetings)
// APPROACH: sort the array of objects based on start time
// create an array with the first object already in it (the first meeting time)
// go through the rest of the array and if the end time is contained in the first start time, make the new end time of the merged meeting the maximum of the end times
// this is to take into account cases like this: [{ startTime: 1, endTime: 8 }, 
// { startTime: 2, endTime: 5 }] where the second meeting is contained in the first

// TIME: O(nlogn) to sort the meetings
// SPACE: O(n) in worst case, none of the meetings overlap

function mergeRanges(meetings) {
  let sortedMeetings = meetings.sort(function(a,b) {return a.startTime - b.startTime});
  
  let mergedMeetings = [];
  // add the first meeting to the merged meetings array
  mergedMeetings.push(sortedMeetings[0]);

  // go through the rest of the array
  for (let i = 1; i < sortedMeetings.length; i++) {
    let currentStartTime = sortedMeetings[i].startTime;
    let currentEndTime = sortedMeetings[i].endTime;
    let lastEndTime = mergedMeetings[mergedMeetings.length - 1].endTime;
    if (currentStartTime <= lastEndTime) {
      // need to get the max of the end times 
      let endTime = Math.max(currentEndTime, lastEndTime)
      mergedMeetings[mergedMeetings.length - 1].endTime = endTime;
    } else {
      mergedMeetings.push(sortedMeetings[i])
    }
  }
  
  return mergedMeetings;
}

console.log(mergeRanges([{ startTime: 1, endTime: 8 }, 
{ startTime: 2, endTime: 5 }]
))

console.log(mergeRanges(  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]))
