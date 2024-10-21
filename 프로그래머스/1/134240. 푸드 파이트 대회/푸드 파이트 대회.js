function solution(food) {
  const str = food
    .slice(1)
    .map((v) => (v % 2 ? (v - 1) / 2 : v / 2))
    .map((v, i) =>
      Array(v)
        .fill()
        .map(() => i + 1)
    )
    .flat()
    .join("");

  return str + "0" + [...str].reverse().join("");
}