function solution(wallpaper) {
  const verDrag = wallpaper
    .map((v, i) => [v.indexOf("#"), v.lastIndexOf("#"), i])
    .filter((v) => v[0] !== -1);

  const [lux, rdx] = [verDrag[0][2], verDrag[verDrag.length - 1][2] + 1];

  const [luy, rdy] = [
    Math.min(...verDrag.map((v) => v[0])),
    Math.max(...verDrag.map((v) => v[1])) + 1,
  ];

  return [lux, luy, rdx, rdy];
}