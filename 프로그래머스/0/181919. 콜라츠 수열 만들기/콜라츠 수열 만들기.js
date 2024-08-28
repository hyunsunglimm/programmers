const colatz = (num) => (num % 2 ? 3 * num + 1 : num / 2);

function solution(n) {
  const array = [];
  let num = n;

  while (num !== 1) {
    array.push(colatz(num));
    num = colatz(num);
  }

  return [n, ...array];
}