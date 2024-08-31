function solution(arr, flag) {
  let result = [];

  arr.forEach((v, i) => {
    if (flag[i]) {
      for (let i = 0; i < v * 2; i++) {
        result.push(v);
      }
    } else {
      for (let i = 0; i < v; i++) {
        result.pop(v);
      }
    }
  });

  return result;
}