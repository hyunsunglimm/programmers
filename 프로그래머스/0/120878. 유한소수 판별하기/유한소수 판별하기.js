const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

const primeFactorization = (n) => {
  const arr = [];
  let i = 2;

  while (n >= i) {
    if (n % i === 0) {
      n /= i;
      arr.push(i);
      i = 2;
    } else {
      i++;
    }
  }

  return arr;
};

function solution(a, b) {
  const denominator = b / gcd(a, b);
  return primeFactorization(denominator).every((v) => [2, 5].includes(v)) ? 1 : 2;
}