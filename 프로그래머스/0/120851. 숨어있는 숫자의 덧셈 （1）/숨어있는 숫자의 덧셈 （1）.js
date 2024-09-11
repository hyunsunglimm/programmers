function solution(my_string) {
  return [...my_string]
    .map((v) => Number(v))
    .filter((v) => v > 0)
    .reduce((a, b) => a + b, 0);
}