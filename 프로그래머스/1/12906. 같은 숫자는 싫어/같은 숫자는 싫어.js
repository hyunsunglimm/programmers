function solution(arr) {
  const result = [];

  arr.forEach((v, i, origin) => {
    if (i === 0 || v !== origin[i - 1]) result.push(v);
  });

  return result;
}