function solution(arr, queries) {
  return queries.reduce(
    (acc, cur) =>
      acc.map((v, i) =>
        i >= cur[0] && i <= cur[1] && i % cur[2] === 0 ? v + 1 : v
      ),
    arr
  );
}
