// PROBLEM: gameOfLife
// https://leetcode.com/problems/game-of-life/solution/

// APPROACH: generate the board using in-place technique
// to demarkate that we changed a cell, make the new result be either -1 or -0
// that way, we can tell what the old value used to be
// at the end iterate through the board again to get rid of the negatives
// TIME: O(mn) where m is the number of rows and n is the number of columns
// SPACE: O(1) in place

var gameOfLife = function(board) {
    neighbors = [[1,0], [1,-1], [0,-1], [-1,-1], [-1,0], [-1,1], [0,1], [1,1]];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let sumOfNeighbors = 0;
            let currentCell = board[i][j];
   
            for (let k = 0; k < neighbors.length; k++) {
                let row = i + neighbors[k][0];
                let col = j + neighbors[k][1];
  
                let currentNeighbor = null;
                if (row >= 0 && row < board.length && col >= 0 && col < board[i].length) {
                    currentNeighbor = board[row][col] 
                }
                if (currentNeighbor === null) {
                    continue;
                }
                else if (String(currentNeighbor) === '-1') {
                    currentNeighbor = 0;
                }
                else if (String(currentNeighbor) === '-0') {
                    currentNeighbor = 1;
                }
                sumOfNeighbors += currentNeighbor;
            }
          if (currentCell === 1 && sumOfNeighbors < 2) {
              board[i][j] = '-0';
          }
          else if (currentCell === 1 && (sumOfNeighbors === 2 || sumOfNeighbors === 3)) {
              board[i][j] = 1;
          }
          else if (currentCell === 1 && sumOfNeighbors > 3){
              board[i][j] = '-0';
          }
          else if (currentCell === 0 && sumOfNeighbors === 3){
              board[i][j] = '-1';
          }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          let currentCell = board[i][j];
          if (currentCell === '-1') {
            board[i][j] = 1;
          }
          else if (currentCell === '-0') {
            board[i][j] = 0;
          }
        }
    }

    return board;
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])) // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
