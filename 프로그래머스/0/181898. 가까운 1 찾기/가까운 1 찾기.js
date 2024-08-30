function solution(arr, idx) {
  return (
    arr
      .map((v, i) => (v === 1 ? i : -1))
      .filter((v) => v !== -1)
      .find((v) => v >= idx) ?? -1
  );
}