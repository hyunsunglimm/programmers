function solution(age) {
  return age
    .toString()
    .split("")
    .map((num) => String.fromCharCode(97 + Number(num)))
    .join("");
}