function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const newArr = arr.slice(s, e + 1).filter((v) => v > k);

    return newArr.length === 0 ? -1 : Math.min(...newArr);
  });
}
