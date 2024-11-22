function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(
    `2016-${a.toString().padStart(2, "0")}-${b.toString().padStart(2, "0")}`
  );

  return days[date.getDay()];
}