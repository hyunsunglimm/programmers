function solution(date1, date2) {
  const dateStr1 = new Date(date1.join("-"));
  const dateStr2 = new Date(date2.join("-"));

  return dateStr1 < dateStr2 ? 1 : 0;
}