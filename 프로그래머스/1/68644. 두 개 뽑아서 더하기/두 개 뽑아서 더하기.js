function getCombinations(numbers, selectNumber = 2) {
  const results = [];
  if (selectNumber === 1) return numbers.map((el) => [el]);

  numbers.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

function solution(numbers) {
  const sums = getCombinations(numbers)
    .map(([a, b]) => a + b)
    .sort((a, b) => a - b);

  return [...new Set(sums)];
}