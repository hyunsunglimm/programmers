function solution(t, p) {
  const arr = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    arr.push(Number(t.slice(i, p.length + i)));
  }

  return arr.filter((v) => v <= Number(p)).length;
}