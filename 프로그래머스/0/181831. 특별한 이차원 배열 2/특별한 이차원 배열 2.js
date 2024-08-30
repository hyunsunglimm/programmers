function solution(arr) {
  return arr
    .map((v, i) => v.map((_, j) => (arr[i][j] === arr[j][i] ? 1 : 0)))
    .flat()
    .every((v) => v === 1)
    ? 1
    : 0;
}