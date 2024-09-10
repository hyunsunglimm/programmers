function solution(a, b, c, d) {
  const countMap = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const arr = Object.entries(countMap).map(([key, value]) => ({
    value: key,
    count: value,
  }));

  const case1 = arr.length === 1;
  const case2 = arr.length === 2 && arr.some((v) => v.count === 3);
  const case3 = arr.length === 2 && arr.some((v) => v.count === 2);
  const case4 = arr.length === 3;

  if (case1) {
    return Number(arr[0].value) * 1111;
  } else if (case2) {
    const p = Number(arr.sort((a, b) => b.count - a.count)[0].value);
    const q = Number(arr.sort((a, b) => b.count - a.count)[1].value);
    return Math.pow(10 * p + q, 2);
  } else if (case3) {
    const [p, q] = arr.map((v) => Number(v.value));
    return (p + q) * Math.abs(p - q);
  } else if (case4) {
    const [q, r] = arr.filter((v) => v.count === 1).map((v) => Number(v.value));
    return q * r;
  } else {
    return Math.min(...arr.map((v) => Number(v.value)));
  }
}