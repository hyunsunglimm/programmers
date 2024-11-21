function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b);
  d.forEach((v) => {
    if (v <= budget) {
      count++;
      budget -= v;
    }
  });

  return count;
}