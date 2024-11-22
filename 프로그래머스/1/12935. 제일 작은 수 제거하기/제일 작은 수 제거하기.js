function solution(arr) {
  const min = Math.min(...arr);
  const filter = arr.filter((v) => v !== min);

  return filter.length === 0 ? [-1] : filter;
}