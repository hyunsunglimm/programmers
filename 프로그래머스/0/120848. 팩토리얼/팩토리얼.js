function solution(n) {
  let i = 1;
  let num = 1;

  while (num <= n) {
    i++;
    num = num * i;
  }

  return i - 1;
}