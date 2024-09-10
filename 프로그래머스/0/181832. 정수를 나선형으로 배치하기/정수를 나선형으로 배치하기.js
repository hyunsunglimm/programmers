function solution(n) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  let value = 1;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (value <= n * n) {
    for (let i = left; i <= right && value <= n * n; i++) {
      result[top][i] = value++;
    }
    top++;

    for (let i = top; i <= bottom && value <= n * n; i++) {
      result[i][right] = value++;
    }
    right--;

    for (let i = right; i >= left && value <= n * n; i--) {
      result[bottom][i] = value++;
    }
    bottom--;

    for (let i = bottom; i >= top && value <= n * n; i--) {
      result[i][left] = value++;
    }
    left++;
  }

  return result;
}