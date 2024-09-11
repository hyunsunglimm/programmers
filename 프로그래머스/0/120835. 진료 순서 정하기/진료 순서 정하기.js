function solution(emergency) {
  return emergency
    .map((v, i) => [v, i + 1])
    .sort((a, b) => b[0] - a[0])
    .map((v, i) => [...v, i + 1])
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[2]);
}