function solution(arr, query) {
  return query.reduce(
    (acc, cur, i) => (i % 2 ? acc.slice(cur) : acc.slice(0, cur + 1)),
    arr
  );
}