function solution(n, lost, reserve) {
  // 여벌 체육복을 가진 학생이 도난당한 경우를 제외
  let realLost = lost.filter((v) => !reserve.includes(v));
  let realReserve = reserve.filter((v) => !lost.includes(v));

  // 정렬하여 빌려주는 순서를 명확히
  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  let count = 0;

  realLost.forEach((v) => {
    if (realReserve.includes(v - 1)) {
      realReserve = realReserve.filter((r) => r !== v - 1);
    } else if (realReserve.includes(v + 1)) {
      realReserve = realReserve.filter((r) => r !== v + 1);
    } else {
      count++;
    }
  });

  return n - count;
}