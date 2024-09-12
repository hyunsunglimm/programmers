function solution(s) {
  const countArr = [...s].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(countArr)
    .filter((v) => v[1] === 1)
    .map((v) => v[0])
    .sort()
    .join("");
}