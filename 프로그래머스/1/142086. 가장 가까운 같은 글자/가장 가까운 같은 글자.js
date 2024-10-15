function solution(s) {
  return [...s].map((v, i, arr) => {
    const front = s.slice(0, i);
    const nearIndex = front.lastIndexOf(v);
    const distance = i - nearIndex
    return nearIndex < 0 ? nearIndex : distance
  });
}