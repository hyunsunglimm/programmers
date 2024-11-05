function solution(numbers) {
  const allNumbers = Array(10)
    .fill()
    .map((_, i) => i);

  return allNumbers
    .filter((v) => !numbers.includes(v))
    .reduce((acc, cur) => acc + cur, 0);
}