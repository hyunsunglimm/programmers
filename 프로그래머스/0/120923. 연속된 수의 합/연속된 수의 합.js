function solution(num, total) {
  let x = 0;
  const initArr = Array(num)
    .fill()
    .map((_, i) => x + i);

  const diff = (total - initArr.reduce((a, b) => a + b, 0)) / num;
  return initArr.map((v) => v + diff);
}