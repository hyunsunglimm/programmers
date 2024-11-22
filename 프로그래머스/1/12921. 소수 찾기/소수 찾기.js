function solution(n) {
  let count = 0;
  while (n > 1) {
    if (isPrime(n)) {
      count++;
    }
    n--
  }

  return count
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}