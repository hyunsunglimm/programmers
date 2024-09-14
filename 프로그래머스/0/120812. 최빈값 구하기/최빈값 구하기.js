function solution(array) {
  const frequencyObj = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const frequency = Object.entries(frequencyObj).sort(
    (a, b) => b[1] - a[1]
  )[0][1];

  const mode = Object.entries(frequencyObj).filter((v) => v[1] === frequency);

  return mode.length === 1 ? Number(mode[0][0]) : -1;
}