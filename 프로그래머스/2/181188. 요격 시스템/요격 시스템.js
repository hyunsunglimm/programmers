// 그리디 알고리즘
function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastIntercept = -Infinity;

  for (const [start, end] of targets) {
    if (start >= lastIntercept) {
      count++;
      lastIntercept = end;
    }
  }

  return count;
}