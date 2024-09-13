function combination(n, k) {
  if (k === 0 || n === k) return 1;
  let result = 1;
  for (let i = 0; i < k; i++) {
    result *= (n - i);
    result /= (i + 1);
  }
  return result;
}

function solution(balls, share) {
  return combination(balls, share);
}
