function solution(n, m, section) {
  let count = 0;
  let currentPos = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > currentPos) {
      count++;
      currentPos = section[i] + m - 1;
    }
  }

  return count;
}