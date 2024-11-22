function solution(s) {
  return s
    .split(" ")
    .map((v) =>
      [...v].map((s, i) => (i % 2 ? s.toLowerCase() : s.toUpperCase())).join("")
    )
    .join(" ");
}