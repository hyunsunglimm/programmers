function solution(strArr) {
  const numArr = strArr.map((v) => v.length);

  const frequency = {};

  for (let num of numArr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return Math.max(...Object.values(frequency));
}