// PROBLEM: given a string with the first line being columns headers, sort the data so that the columns (and associated data) are in alpha order

function sortColumns(str) {
  let splitOnLine = str.split('\n');
  let hash = {};
  
  // add the names and values to the hash based on the index that they appear
  for (let i = 0; i < splitOnLine.length; i++) {
    let innerValues = splitOnLine[i].split(',');
    for (let j = 0; j < innerValues.length; j++) {
      if (!hash[j]) {
        hash[j] = [innerValues[j]];
      } else hash[j].push(innerValues[j])
    }
  }
 
  // go through the hash and just grab all the values and put into array
  let arrayToSort = [];

  for (let key in hash) {
    arrayToSort.push(hash[key])
  }
 
  // sort the array based on the columns
  arrayToSort.sort();

  // reconstruct the string
  let length = arrayToSort[0].length;
  let newString = '';
  for (let j = 0; j < length; j++) {
    for (let i = 0; i < arrayToSort.length; i++) {
      let firstValue = arrayToSort[i].splice(0,1);
      if (i === arrayToSort.length - 1) {
        newString += firstValue;
      } else newString += firstValue + ',';
    }
    if (j!==length-1) {
      newString += '\n';
    }
  }

  console.log(newString);
}

sortColumns('steve,andrew,michael,bob\n3112,21352,123412,4325\n2,6,3,5')
