function solution(n) {
  const arr = Array(n)
    .fill()
    .map((_, index) =>
      Array(n)
        .fill()
        .map((_, i) => (i === index ? 1 : 0))
    );
  return arr;
}