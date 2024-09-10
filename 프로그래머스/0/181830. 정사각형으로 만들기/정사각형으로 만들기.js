function solution(arr) {
  const row = arr[0].length;
  const col = arr.length;

  if (row < col) {
    return arr.map((v) => [
      ...v,
      ...Array(col - row)
        .fill()
        .map(() => 0),
    ]);
  } else if (row > col) {
    return [
      ...arr,
      ...Array(row - col)
        .fill()
        .map(() => Array(row).fill().map(() => 0)),
    ];
  } else {
    return arr;
  }
}