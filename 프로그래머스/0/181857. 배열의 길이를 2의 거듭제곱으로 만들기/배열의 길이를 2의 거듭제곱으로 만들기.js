const isPowOfTwo = (n) => {
  return Math.log2(n) % 1 === 0;
};

function solution(arr) {
  while (!isPowOfTwo(arr.length)) {
    arr.push(0);
  }

  return arr;
}