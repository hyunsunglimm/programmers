// 이진 탐색 (이분 탐색)
function solution(diffs, times, limit) {
  const getTime = (level) => {
    let totalTime = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (level >= diffs[i]) {
        totalTime += times[i];
      } else {
        totalTime += (diffs[i] - level) * (times[i] + times[i - 1]) + times[i];
      }
    }
    return totalTime;
  };

  let [left, right] = [1, diffs.reduce((acc, cur) => Math.max(acc, cur), 1)];
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (getTime(mid) <= limit) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}