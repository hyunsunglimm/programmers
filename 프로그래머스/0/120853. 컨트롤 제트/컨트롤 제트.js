function solution(s) {
  return s.split(" ").reduce(
    (acc, cur, i) =>
      cur === "Z" ? acc - Number(s.split(" ")[i - 1]) : acc + Number(cur),
    0
  );
}