function solution(arr, k) {
  const result = [];

  arr.forEach((v) => {
    if (!result.includes(v)) result.push(v);
  });

  return result.length >= k
    ? result.slice(0, k)
    : [
        ...result,
        ...Array(k - result.length)
          .fill()
          .map(() => -1),
      ];
}