function solution(n) {
  return [...n.toString()].reverse().map(v => parseInt(v));
}