const getSlope = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);

function solution(dots) {
  const [a, b, c, d] = dots;

  const slopeAB = getSlope(a, b);
  const slopeAC = getSlope(a, c);
  const slopeAD = getSlope(a, d);
  const slopeBC = getSlope(b, c);
  const slopeBD = getSlope(b, d);
  const slopeCD = getSlope(c, d);

  if (slopeAB === slopeCD || slopeAC === slopeBD || slopeAD === slopeBC)
    return 1;

  return 0;
}