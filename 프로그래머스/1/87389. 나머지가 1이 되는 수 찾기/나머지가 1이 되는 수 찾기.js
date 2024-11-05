function solution(n) {
  for (let i = 1; i <= n - 1; i++) {
    if (i !== 1 && (n - 1) % i === 0) return i;
  }
}