function solution(s) {
  return s.startsWith("-") ? parseInt(s.slice(1)) * -1 : parseInt(s);
}