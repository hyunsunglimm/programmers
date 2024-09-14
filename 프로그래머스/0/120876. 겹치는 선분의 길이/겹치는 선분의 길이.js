function solution(lines) {
  const lineRange = Array(201).fill(0);

  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      lineRange[i + 100]++;
    }
  });

  let overlapLength = 0;
  for (let i = 0; i < lineRange.length; i++) {
    if (lineRange[i] > 1) {
      overlapLength++;
    }
  }

  return overlapLength;
}