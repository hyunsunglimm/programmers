function solution(sides) {
  const c = Math.max(...sides);
  sides.splice(
    sides.findIndex((v) => v === c),
    1
  );

  const [a, b] = sides;

  return a + b > c ? 1 : 2;
}