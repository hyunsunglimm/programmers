function solution(sizes) {
  const sortedSizes = sizes.map((v) => v.sort((a, b) => b - a));
  const width = Math.max(...sortedSizes.map((v) => v[0]));
  const height = Math.max(...sortedSizes.map((v) => v[1]));

  return width * height;
}