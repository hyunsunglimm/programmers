function solution(k, score) {
  return score.map((v, i, arr) => {
    const registered = arr
      .slice(0, i + 1)
      .sort((a, b) => b - a)
      .slice(0, k);

    return Math.min(...registered);
  });
}