function solution(my_string) {
  return [...my_string]
    .map((v) => (/[a-z]/.test(v) ? v.toUpperCase() : v.toLowerCase()))
    .join("");
}