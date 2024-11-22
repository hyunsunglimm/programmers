function solution(nums) {
  const combinations = getCombinations(nums);
  return combinations
    .map((c) => c.reduce((acc, cur) => acc + cur, 0))
    .filter((v) => isPrime(v)).length;
}

function isPrime(num) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
    }
  }

  const divisorCount = Number.isInteger(Math.sqrt(num))
    ? count * 2 + 1
    : count * 2;

  return divisorCount === 2;
}

const getCombinations = function (arr, selectNumber = 3) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};