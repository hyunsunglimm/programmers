function solution(i, j, k) {
  return Array(j - i + 1)
    .fill()
    .map((_, index) => String(index + i))
    .filter((v) => v.includes(String(k)))
    .join("")
    .split("")
    .filter((v) => v === String(k)).length;
}