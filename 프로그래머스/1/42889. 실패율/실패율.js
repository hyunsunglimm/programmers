function solution(N, stages) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    result.push([
      i,
      stages.filter((v) => v === i).length /
        stages.filter((v) => v >= i).length,
    ]);
  }
  return result.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}