function solution(myString) {
  return myString
    .toLowerCase()
    .split("")
    .map((v) => (v === "a" ? v.toUpperCase() : v))
    .join("");
}