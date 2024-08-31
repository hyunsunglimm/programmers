function solution(a, d, included) {
  return included
    .map((v, i) => (v ? d * i + a : 0))
    .reduce((acc, cur) => acc + cur, 0);
}