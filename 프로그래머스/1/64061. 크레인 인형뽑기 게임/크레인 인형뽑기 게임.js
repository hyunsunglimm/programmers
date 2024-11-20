function solution(board, moves) {
  const cart = [];
  let count = 0;
  moves.forEach((move) => {
    const selectedRow = board.findIndex((v) => v[move - 1] > 0);

    if (selectedRow >= 0) {
      cart.push(board[selectedRow][move - 1]);
      if (cart[cart.length - 1] === cart[cart.length - 2]) {
        cart.pop();
        cart.pop();
        count += 2;
      }
      board[selectedRow][move - 1] = 0;
    }
  });

  return count;
}