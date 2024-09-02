function solution(myStr) {
  const arr = myStr
    .split("")
    .map((v) => (["a", "b", "c"].includes(v) ? "space" : v))
    .join("")
    .split("space")
    .filter((v) => v !== "");

  return arr.length === 0 ? ["EMPTY"] : arr;
}