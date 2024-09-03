const isSameArr = (arr1, arr2) => {
  const isSameLength = arr1.length === arr2.length;

  const isSameValue = arr1.every((v, i) => v === arr2[i]);

  return isSameLength && isSameValue;
};

const convertArr = (arr, x) => {
  if (x <= 0) return arr;
  const newArr = [...arr];
  for (let i = 0; i < x; i++) {
    newArr.forEach((v, i) => {
      if (v >= 50 && v % 2 === 0) newArr[i] = v / 2;
      if (v < 50 && v % 2 === 1) newArr[i] = v * 2 + 1;
    });
  }

  return newArr;
};

function solution(arr) {
  let n = 0;

  while (!isSameArr(convertArr(arr, n), convertArr(arr, n + 1))) {
    n++;
  }
  return n;
}