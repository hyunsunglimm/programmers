function solution(arr) {
  return arr.map((v) => Array.from({ length: v }, () => v)).flat();
}