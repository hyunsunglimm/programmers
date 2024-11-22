function solution(s) {
  const length = s.length;
  if (length !== 4 && length !== 6) return false;

  return /^\d+$/.test(s);
}