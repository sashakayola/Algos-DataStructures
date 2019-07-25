// PROBLEM: https://leetcode.com/problems/valid-sudoku/submissions/
// TIME: O(n^2)
// SPACE: O(1) constant

var isValidSudoku = function(board) {
    // check that in each row, there isn't a repeat number
    for (let i = 0; i < 9; i++) {
        let numbersInRow = new Set();
        for (let j = 0; j < 9; j++) {
            // keep the row fixed
            let cell = board[i][j];
            if (cell !== '.') {
                if (numbersInRow.has(cell)) {
                return false
            } else {
                numbersInRow.add(cell);
            }
            }
        }
    }
    
    // check that each column is valid
    for (let i = 0; i < 9; i++) {
        let column = i;
        let numbersInColumn = new Set();
        for (let j = 0; j < 9; j++) {
            let row = j;
            // keep the i fixed (ae the column)
            let cell = board[j][i];
            if (cell !== '.') {
                if (numbersInColumn.has(cell)) {
                    return false
                } else {
                    numbersInColumn.add(cell);
                }
            }  
        }
    }
    
    // check that each sub-box is valid
    let subBoxes = [[0,0],[0,3],[0,6],
                    [3,0],[3,3],[3,6],
                    [6,0],[6,3],[6,6]]
    for (let i = 0; i < subBoxes.length; i++) {
        let row = subBoxes[i][0];
        let column = subBoxes[i][1];
        let box = new Set();
        for (let k = 0; k < 3; k++) {
            let newRow = row + k;
            for (let j = 0; j < 3; j++) {
                let newCol = column + j;
                let cell = board[newRow][newCol];
                if (cell !== '.') {
                    if (box.has(cell)) {
                        return false
                    } else {
                        box.add(cell);
                    }
                }
            }
        }
    }
    
    return true;
};
