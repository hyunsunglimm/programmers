function change(arr, query) {
  return arr.map((v, i) =>
    i === query[0] ? arr[query[1]] : i === query[1] ? arr[query[0]] : v
  );
}

function solution(arr, queries) {
  return queries.reduce((acc, cur) => change(acc, cur), arr)
}
