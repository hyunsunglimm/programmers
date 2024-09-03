function solution(arr) {
  if (!arr.includes(2)) return [-1];
  const numArr = arr.map((v, i) => (v === 2 ? i : -1)).filter((v) => v !== -1);
  return arr.slice(Math.min(...numArr), Math.max(...numArr) + 1);
}