const cal1 = (a, b) => Number(a.toString() + b.toString());
const cal2 = (a, b) => Number(b.toString() + a.toString());

function solution(a, b) {
  return cal1(a, b) >= cal2(a, b) ? cal1(a, b) : cal2(a, b);
}
