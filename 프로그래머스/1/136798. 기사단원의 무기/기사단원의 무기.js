const getMeasure = (n) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) count++;
  }

  return Number.isInteger(Math.sqrt(n)) ? count * 2 - 1 : count * 2;
};

function solution(number, limit, power) {
  return Array(number)
    .fill()
    .map((_, i) => getMeasure(i + 1))
    .map((v) => (v > limit ? power : v))
    .reduce((a, c) => a + c, 0);
}