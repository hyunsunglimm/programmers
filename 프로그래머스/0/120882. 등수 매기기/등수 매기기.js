function solution(score) {
  const arr = score.map(([eng, math]) => (eng + math) / 2);
  const sortedArr = [...arr].sort((a, b) => b - a);

  return arr.map((v) => sortedArr.indexOf(v) + 1);
}