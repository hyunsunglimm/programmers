const multiString = (string, k) => {
  return string
    .split("")
    .map((v) =>
      Array(k)
        .fill()
        .map(() => v)
    )
    .flat()
    .join("");
};

function solution(picture, k) {
  return picture
    .map((v) =>
      Array(k)
        .fill()
        .map(() => multiString(v, k))
    )
    .flat();
}