function solution(n) {
  let num = n;
  let i = 2;
  const arr = [];

  while (num > 1) {
    if (num % i === 0) {
      arr.push(i);
      num = num / i;
      i = 2;
    } else {
      i++;
    }
  }

  return [...new Set(arr)].sort((a, b) => a - b);
}