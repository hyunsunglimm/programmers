function solution(array, n) {
  const arr = array
    .map((v, i) => [Math.abs(v - n), i])
    .sort((a, b) => a[0] - b[0]);

  const sameArr = arr.filter((v) => v[0] === arr[0][0]);

  return Math.min(...sameArr.map((v) => array[v[1]]));
}