function solution(date1, date2) {
  const dateStr1 = new Date(date1);
  const dateStr2 = new Date(date2);

  return dateStr1 < dateStr2 ? 1 : 0;
}