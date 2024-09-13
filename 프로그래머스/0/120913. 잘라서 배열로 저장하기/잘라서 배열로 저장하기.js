function solution(my_str, n) {
  return Array(Math.ceil(my_str.length / n))
    .fill()
    .map((_, i) => my_str.slice(n * i, n * (i + 1)));
}