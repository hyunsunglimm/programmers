function solution(hp) {
  let result = 0;

  while (hp >= 5) {
    hp = hp - 5;
    result++;
  }

  while (hp >= 3) {
    hp = hp - 3;
    result++;
  }

  while (hp >= 1) {
    hp = hp - 1;
    result++;
  }

  return result;
}