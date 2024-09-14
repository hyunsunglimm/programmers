const pushStr = (str, n) => {
  let string = str;
  for (let i = 0; i < n; i++) {
    string = string[string.length - 1] + string.slice(0, string.length - 1);
  }
  return string;
};

function solution(A, B) {
  const findIndex = Array(A.length)
    .fill()
    .map((_, i) => pushStr(A, i))
    .findIndex((v) => v === B);

  return findIndex === -1 ? -1 : findIndex;
}