// PROBLEM: given the coordinates of a cell in a 2D array, return the index the cell would be in a 1D array
// (note: problem not on leetcode, but the difficulty is easy)
// given the row of the cell and the column of the cell and the width of the 2D board
function 2Dcoordinates(row, column, widthOfBoard) {
  return row * widthOfBoard + column;
}
