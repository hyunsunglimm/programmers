const oddCase = (n) => {
  let num = 0;

  for (let i = n; i > 0; i--) {
    if (i % 2) {
      num += i;
    }
  }

  return num;
};

const evenCase = (n) => {
  let num = 0;

  for (let i = n; i > 0; i--) {
    if (!(i % 2)) {
      num += i * i;
    }
  }

  return num;
};

function solution(n) {
  return n % 2 ? oddCase(n) : evenCase(n);
}