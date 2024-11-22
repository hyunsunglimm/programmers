function solution(s) {
  const length = s.length;

  if (length % 2) {
    return s.slice(Math.floor(length / 2), Math.floor(length / 2) + 1);
  } else {
    return s.slice(length / 2 - 1, length / 2 + 1);
  }
}