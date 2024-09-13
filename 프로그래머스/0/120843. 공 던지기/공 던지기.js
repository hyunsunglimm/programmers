function solution(numbers, k) {
  return Array(k)
    .fill()
    .map((_, i) => numbers[(i * 2) % numbers.length])
    .pop();
}