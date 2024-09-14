function solution(chicken) {
  let service = 0;

  while (chicken >= 10) {
    chicken -= 9;
    service++;
  }

  return service;
}