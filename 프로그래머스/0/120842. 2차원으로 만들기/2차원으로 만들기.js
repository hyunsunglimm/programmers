function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill()
        .map((_, j) => num_list[i * n + j])
    );
}