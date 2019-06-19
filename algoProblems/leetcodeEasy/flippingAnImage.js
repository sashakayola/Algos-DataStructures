// PROBLEM: https://leetcode.com/problems/flipping-an-image/
// given a two dimensional array, reverse each inner array and flip its elements so 0s become 1s and 1s become 0s

// APPROACH 1: go through each inner Array and keep the reversed and swapped version in a temp array and add to a new array
// SPACE: O(n) to go through the entire string
// SPACE: O(n) space because storing a temporary image of each inner array and adding to a new array
var flipAndInvertImage = function(image) {
    let newImage = [];
    
    for (let i = 0; i < image.length; i++) {
      let imageTemp = [];
      for (let j = image[i].length - 1; j >= 0; j--) {
          if (image[i][j] === 0) {
              imageTemp.push(1);
          } 
          else imageTemp.push(0);
      }
      newImage.push(imageTemp);
    } 
    
    return newImage;
};

// APPROACH 2: in place. go through each inner array. for the outer elements, if they are different, swapping them and switching the sign is the same as leaving as they are. if the outer elements are the same, flip them
// flip the inner element always
// TIME: O(n)
// SPACE: O(1) constant
var flipAndInvertImage = function(image) {
    
    for (let i = 0; i < image.length; i++) {
      let innerImage = image[i];
      let lPointer = 0;
      let rPointer = innerImage.length - 1;
      while (lPointer < rPointer) {
        // if both of the outer elements are the same, then flip both
        // if they are different, swapping and flipping results in the same thing
        if (innerImage[lPointer] === innerImage[rPointer]) {
          // the below is to get the inverse (use XOR)
        // 1 XOR 1 = 0
        // 0 XOR 1 = 1
          innerImage[lPointer] ^= 1;
          innerImage[rPointer] ^= 1;
        }
        lPointer++;
        rPointer--;
      }
      // for the middle element, always flip it
      if (lPointer === rPointer) {
        innerImage[lPointer] ^= 1;
      }
    } 
    
    return image;
};

// APPROACH 3: also in place, essentially same as above
var flipAndInvertImage3 = function(image) { 
    for (let i = 0; i < image.length; i++) {
      let imageTemp = image[i];
      for (let j = 0; j < Math.floor(imageTemp.length / 2) + 1; j++) {
        // the below is to get the inverse (use XOR)
        // 1 XOR 1 = 0
        // 0 XOR 1 = 1
        let leftTemp = imageTemp[j] ^ 1;
        imageTemp[j] = imageTemp[imageTemp.length - j - 1] ^ 1;
        imageTemp[imageTemp.length - j - 1] = leftTemp;
      }
    }  
    
    return image;
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]) // [[1,0,0],[0,1,0],[1,1,1]]
