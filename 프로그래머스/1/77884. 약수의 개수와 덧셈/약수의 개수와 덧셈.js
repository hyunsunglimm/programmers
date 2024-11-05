function isPrime(num) {
  return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}

function solution(left, right) {
  const numbers = Array(right - left + 1)
    .fill()
    .map((_, i) => i + left);

  const evenNumbers = numbers.filter((v) => !isPrime(v));
  const oddNumbers = numbers.filter((v) => isPrime(v));

  const sum = (a, b) => a + b;

  return evenNumbers.reduce(sum, 0) - oddNumbers.reduce(sum, 0);
}