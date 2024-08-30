function solution(board, k) {
  return board
    .flatMap((row, i) => row.filter((_, j) => i + j <= k))
    .reduce((a, b) => a + b, 0);
}