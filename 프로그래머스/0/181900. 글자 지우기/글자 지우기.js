function solution(my_string, indices) {
  let strArr = my_string.split("");

  indices.sort((a, b) => b - a).forEach((v) => strArr.splice(v, 1));
  return strArr.join("");
}