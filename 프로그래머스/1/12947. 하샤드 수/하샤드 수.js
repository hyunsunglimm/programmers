function solution(x) {
  const sum = [...x.toString()]
    .map((v) => parseInt(v))
    .reduce((acc, cur) => acc + cur, 0);

  return x % sum === 0;
}