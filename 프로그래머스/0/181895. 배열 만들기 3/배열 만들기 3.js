function solution(arr, intervals) {
  return intervals
    .map((interval) =>
      arr.filter((_, i) => i >= interval[0] && i <= interval[1])
    )
    .flat();
}