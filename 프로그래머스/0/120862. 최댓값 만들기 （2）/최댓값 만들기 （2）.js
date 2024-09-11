function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const [a, b] = [sortedNumbers[0], sortedNumbers[1]];
  const [c, d] = [
    sortedNumbers[sortedNumbers.length - 1],
    sortedNumbers[sortedNumbers.length - 2],
  ];

  return Math.max(a * b, c * d);
}