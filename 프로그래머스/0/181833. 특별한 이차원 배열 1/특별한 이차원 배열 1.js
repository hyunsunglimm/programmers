function solution(n) {
  const arr = Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill()
        .map((_, j) => (i === j ? 1 : 0))
    );
  return arr;
}