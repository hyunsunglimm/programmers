function solution(k, m, score) {
  const bundle = Math.ceil(score.length / m);
  const result = Array(bundle)
    .fill()
    .map(() => []);
  score.sort((a, b) => b - a);
  score
    .map((s, i) => ({ group: Math.floor(i / m), value: s }))
    .forEach((v) => {
      result[v.group].push(v.value);
    });

  return result
    .filter((v) => v.length === m)
    .map((v) => Math.min(...v) * m)
    .reduce((a, b) => a + b, 0);
}