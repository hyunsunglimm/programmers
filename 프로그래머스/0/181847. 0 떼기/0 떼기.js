function solution(n_str) {
  const strArr = n_str.split("");

  const firstIndex = strArr.findIndex((s) => s !== "0");

  return n_str.slice(firstIndex);
}