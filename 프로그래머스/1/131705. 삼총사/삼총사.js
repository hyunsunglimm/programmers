function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

function solution(nums) {
  return getCombinations(nums, 3).filter(
    (v) => v.reduce((acc, cur) => acc + cur, 0) === 0
  ).length;
}