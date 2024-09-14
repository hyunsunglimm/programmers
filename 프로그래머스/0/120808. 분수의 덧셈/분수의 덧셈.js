const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));

function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + denom1 * numer2;
  const denom = denom1 * denom2;

  const gcd = getGCD(numer, denom);

  return [numer / gcd, denom / gcd];
}