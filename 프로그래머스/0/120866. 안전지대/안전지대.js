const check = (board, col, row) => {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[col - 1 + i]) arr.push(board[col - 1 + i][row - 1 + j]);
    }
  }

  return arr.find((v) => v === 1) ? false : true;
};

function solution(board) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (check(board, i, j)) count++;
    }
  }

  return count;
}