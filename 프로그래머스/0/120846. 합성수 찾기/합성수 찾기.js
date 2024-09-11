const getMeasure = (n) => {
  const arr = [];
  let i = 1;

  while (i <= n) {
    if (n % i === 0) arr.push(i);
    i++;
  }

  return arr;
};

function solution(n) {
  const arr = [];
  let i = n;

  while (i > 0) {
    if (getMeasure(i).length >= 3) {
      arr.push(i);
    }
    i--;
  }
  return arr.length;
}