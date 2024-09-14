function solution(polynomial) {
  const arr = polynomial.split(" ");
  const includesX = arr.filter((v) => v.includes("x"));
  const excludesX = arr.filter((v) => !v.includes("x") && v !== "+");

  const xSum = includesX
    .map((v) => (v === "x" ? 1 : Number(v.slice(0, -1))))
    .reduce((a, b) => a + b, 0);

  const constantSum = excludesX.reduce((a, b) => Number(a) + Number(b), 0);

  const resultX = xSum === 1 ? "x" : `${xSum}x`;

  if (xSum === 0) return String(constantSum);
  if (constantSum === 0) return resultX;

  return `${resultX} + ${constantSum}`;
}