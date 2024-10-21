function solution(k, m, score) {
  score.sort((a, b) => b - a);
  return (
    score
      .filter((_, i) => (i + 1) % m === 0)
      .reduce((acc, cur) => acc + cur, 0) * m
  );
}