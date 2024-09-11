function solution(n) {
  let num = 1;
  let count = 0;
  while (Math.sqrt(n) >= num) {
    if (n % num === 0) {
      count++;
    }
    num++;
  }

  return Number.isInteger(Math.sqrt(n)) ? count * 2 - 1 : count * 2;
}