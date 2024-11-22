// 슬라이딩 윈도우 알고리즘
function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  let result = [];

  while (right < sequence.length) {
    if (sum === k) {
      result.push([left, right]);
    }

    if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      sum -= sequence[left];
      left++;
    }
  }

  console.log(result);

  // 가장 짧은 구간 찾기
  result.sort((a, b) => {
    const lenA = a[1] - a[0];
    const lenB = b[1] - b[0];
    if (lenA !== lenB) return lenA - lenB;
    return a[0] - b[0];
  });

  return result[0];
}